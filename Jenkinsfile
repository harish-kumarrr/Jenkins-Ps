pipeline {
    agent any

    environment {
        // This ensures clean logs and non-interactive mode for all stages
        CI = 'true'
    }

    stages {
        stage('Install') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Using the script already updated with --no-color
                bat 'npm run test:run'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                bat 'npm run build'
            }
        }

        stage('Deploy to S3') {
            steps {
                echo 'Deploying to S3...'
                // IMPORTANT: Replace YOUR_S3_BUCKET_NAME with your actual bucket name
                // Requires AWS CLI installed and configured on the Jenkins server
                // bat 'aws s3 sync ./dist s3://YOUR_S3_BUCKET_NAME --delete'
                echo 'Deployment step prepared. Please update the bucket name in the Jenkinsfile.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Build successful! Ready for production.'
        }
        failure {
            echo 'Build failed. Please check the logs for errors.'
        }
    }
}
