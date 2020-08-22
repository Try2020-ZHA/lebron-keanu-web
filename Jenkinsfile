pipeline {
    
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Pre-Process') { 
            steps {
                bat 'npm install --registry=https://registry.npm.taobao.org'
            }
        }

        stage('Build') { 
            steps {
                bat 'npm run-script build' 
            }
        }

        stage('Deploy') { 
            steps {
                bat 'xcopy build\\* D:\\deploy\\frontend /e /y'
            }
        }
    }
}