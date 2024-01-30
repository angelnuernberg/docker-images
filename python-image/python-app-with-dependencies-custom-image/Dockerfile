FROM python:3.9

WORKDIR /app 

EXPOSE 5050

# Copy pipfile and pipefile.lock file to the WORKDIR so that the requirements file can be generated 
COPY Pipfile Pipfile.lock ./
# Only dependencies in [packages] of pipfile are necessary. [dev-packages] are not necessary
# It is assumed that the python image brings pip installed. 
# pipenv must be installed. As it is a container, dependencies can be installed globally
# so there is no need to create a virtualEnv, however pipenv is necessary to create 
# a text file with all the dependencies from the pipfile. This file will be used by pip 
RUN pip install pipenv

# Course version: causes ERROR -> RUN pipenv lock --requirements > requirements.txt 
# https://stackoverflow.com/questions/51845562/how-to-freeze-a-requirement-with-pipenv
RUN pipenv requirements > requirements.txt 
  # pipenv lock --requirements command does not extract dev-packages from the Pipfile,
  # only packages under [packages] section in the Pipfile are extracted
# Install globally all dependencies 
RUN pip install -r requirements.txt 

# I include installation of ping 
RUN apt-get update -y 
RUN apt-get install -y iputils-ping 
# hi there

# copy all remaining application files of the application folder 
# For optimization the copy of the rest files take place after the instructions 
# for intalling the dependencies
# > ATTENTION KEY SECURITY : .env.local and .venv (which is not needed) is also copied into the Image!! 
COPY . ./ 


CMD ["python", "main.py"]




