pipeline {
    agent {label 'localMachine'}
    tools {nodejs "nodejs"}

    options {
        buildDiscarder logRotator(daysToKeepStr: '1', numToKeepStr: '1' )
    }

    stages {

        stage('Upload and Process .tgz File') {
            steps {
                script {
                    // Prompt the user to upload a .tgz file and store the original file name
                    def inputTgzPath = input message: 'Upload .tgz file', parameters: [file(name: 'package.tgz', description: 'Upload only .tgz file')]
                    
                    // Get the original file name
                    def fileName = inputTgzPath.tokenize('/').last()
                    
                    // Print the original file name and path
                    echo ("TGZ FILE NAME IS: ${fileName}")
                    echo ("TGZ FILE PATH IS: ${inputTgzPath}")
                    
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Package') {
            steps {
                sh 'npm pack'
            }
        }

        stage('Archive Package') {
            steps {
                archiveArtifacts artifacts: '*.tgz', fingerprint: true
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}