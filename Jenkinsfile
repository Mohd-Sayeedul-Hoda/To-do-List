pipeline {
    agent any
   environment {
        IMAGE_TAG = "${BUILD_NUMBER}"
    }
    

    stages {
        stage('checkout from github') {
            steps {
                // Get some code from a GitHub repository
               git branch: 'main',
               credentialsId: 'ad42d449-4eae-422d-b84d-82d2b409816e', 
               url: 'https://github.com/Mohd-Sayeedul-Hoda/To-do-List'
                sh 'echo "fetched code from github"'
            }

        }
         stage('building docker image'){
            steps{
                script{
                    sh '''
                    echo ${BUILD_NUMBER}
                    echo 'bulding docker image'
                    docker build -t sayeedulhoda/to-do-cicd${BUILD_NUMBER} .
                    '''
                }
            }
        }
        stage('push image to dockerhub'){
            steps{
                script{
                    withCredentials([string(credentialsId: 'dockerhubpwd', variable: 'dockerpass')]) {
                        sh 'docker login -u sayeedulhoda -p ${dockerpass}'
                    }
                    sh 'docker push sayeedulhoda/to-do-cicd${BUILD_NUMBER}'
                    echo 'push complete to docker hub'
                }
            }
        }
       
    }
}
