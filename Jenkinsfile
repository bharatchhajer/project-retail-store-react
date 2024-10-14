pipeline {
    agent any
    options {
        timeout(time: 15, unit: 'MINUTES') // General job timeout, not specific to Git
    }

    stages {


        stage('Build React App') {
            steps {
                script {
                   // dir("${env.REACT_DIR}") {
                        // Install dependencies and build the React app
                        echo 'Installing React dependencies...'
                        bat 'node --max-old-space-size=4096 --trace-warnings -e "require(\'events\').EventEmitter.defaultMaxListeners = 20;" && npm install'

                        //echo 'Building React App...'
                        //bat 'npm run build'
                        
                  //  }
                }
            }
        }



        stage('Run Both Applications') {
            parallel {
                stage('Run React Frontend') {
                    steps {
                        script {
                           // dir("${env.REACT_DIR}") {
                                // Start the React front-end in development mode
                                echo 'Starting React frontend...'
                                // bat 'start /B npm start > app-front.log 2>&1'
                                // bat 'npm start'
                               // powershell 'npm start | Tee-Object -FilePath app-front.log'
                               //powershell ''' 
                                //Start-Process -FilePath "npm.cmd" -ArgumentList "start" -NoNewWindow -RedirectStandardOutput "app-react.log" -RedirectStandardError "app-react-error.log" 
                                //'''
                                powershell ''' 
                                Start-Job -ScriptBlock { 
                                Start-Process -FilePath "C:\\Program Files\\nodejs\\npm.cmd" -ArgumentList "start" -NoNewWindow -RedirectStandardOutput "app-react.log" -RedirectStandardError "app-react-error.log" 
                                } 
                                ''' 
                         //   }
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
