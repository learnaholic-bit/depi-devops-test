pipeline {
    agent {
        label 'docker'
    }


    stages {
        stage('Build') {
            steps {
                script {
                    parallel(
                        "backend": {
                            sh 'docker build -t georgemedhat/backend:latest -f backend/dockerfile.dev ./backend'
                        },
                        "frontend": {
                            sh 'docker build -t georgemedhat/frontend:latest -f frontend/dockerfile.dev ./frontend'
                        }
                    )
                }
            }
        }

        // stage('Test') {
        //     steps {
        //         sh 'echo "Running tests..."'
        //         // Placeholder for backend tests
        //         sh 'docker run --rm georgemedhat/backend:latest npm test'
        //         // test scripts tag
        //     }
        // }

        // stage('Push') {
        //     steps {
        //         sh 'echo "Pushing images..."'
        //         // Add login logic here if needed, e.g., withCredentials
        //         sh 'docker push georgemedhat/backend:latest'
        //         sh 'docker push georgemedhat/frontend:latest'
        //     }
        // }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying the application..."'
                // Add your deploy commands here, e.g., using docker-compose
                sh 'docker-compose up -d'
            }
        }
    }

}