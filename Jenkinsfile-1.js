2. Declarative Pipeline – Clone, Test and Package

pipeline {
    agent any

    environment {
        BRANCH_NAME = 'main'
    }

    tools {
        maven 'Maven-3.9'
        jdk 'JDK-17'
    }

    options {
        timeout(time:10, unit: 'MINUTES')
    }

    parameters {
        booleanParam(
            name: 'RUN_TESTS',
            defaultValue: true,
            description: 'Run unit tests before packaging'
        )
    }
    triggers {
        cron('H 2 * * *')
    }

    stages {
        stage('Git Clone') {
            steps {
                git branch: "${BRANCH_NAME}", url: 'https://github.com/betawins/hiring-app.git'
            }
        }
        stage('Test') {
            when {
                expression { return params.RUN_TESTS }
            }
            steps {
                sh 'mvn test'
            }
        }
        stage('Package') {
            steps {
                sh 'mvn package -DskipTests'
            }
        }
    }
}