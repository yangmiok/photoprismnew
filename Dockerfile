FROM photoprism/development

# Set up project directory
WORKDIR "/go/src/github.com/photoprism/photoprism"
COPY . .
