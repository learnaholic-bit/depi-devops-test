pipeline {
    agent {
        label 'docker'
    }


    stages {
        stage('Build') {
            steps {
                sh 'echo "Building the project..."'
                // Add your build commands here
                sh 'docker build -t georgemedhat/local-image:latest -f Dockerfile . '
            }
        }
        stage('Test') {
            scripts {
                sh 'echo "Running tests..."'
                // Add your test commands here
                sh 'docker run --rm georgemedhat/local-image:latest test'   
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying the application..."'
                // Add your deploy commands here
            }
        }
    }

}