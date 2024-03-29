export const data = {
    cover: {
        jobTitle: `Associate Solution Architect`,
        jobLocation: `Red Hat APAC`,
        introLine: `The future is Open...`,
        socialMediaLinks: {
            linkedIn: `https://www.linkedin.com/in/nivedv`,
            fb: `https://www.facebook.com/nivedv`,
            twitter: `https://twitter.com/@NivedV1508`
        }
    },
    skills : [
        `I help businesses solve their IT challenges in Linux Infrastructure 
        such as automation and containerization on hybrid cloud environments 
        by using customized open source solutions.`,
        `Currently, my interest lies in Docker and Kubernetes and I’m on my path 
        towards Machine Learning, Deep Learning and Artificial Intelligence. I believe 
        India would be an IT superpower in this decade and I want to position myself to 
        be a driving part of that transformation.`
    ],
    certifications : [
        {
            certificationName: `AWS Certified Solutions Architect - Associate`,
            nameColor: `#fe9900`,
            certificationLink: `https://www.credly.com/badges/dbe1cfba-3a95-41e8-be85-9e02fd48083c`,
            certificateIcon: `/certificate-icons/awsicon.jpg`
        },
        {
            certificationName: `Red Hat Certified Architect in Infrastructure - IV`,
            nameColor: `#ee0000`,
            certificationLink: `https://rhtapps.redhat.com/verify?certId=160-189-957`,
            certificateIcon: `/certificate-icons/redhaticon.jpg`
        },
        {
            certificationName: `Certified Kubernetes Administrator`,
            nameColor: `#316de6`,
            certificationLink: `https://www.youracclaim.com/badges/021dcb7f-68fa-43ef-a7e4-c161b1fb276b`,
            certificateIcon: `/certificate-icons/kubernetesicon.png`
        },
        {
            certificationName: `Certified Kubernetes Application Developer`,
            nameColor: `#316de6`,
            certificationLink: `https://www.youracclaim.com/badges/3b439511-8a88-47ac-b67c-2d0b9cb6aa5e`,
            certificateIcon: `/certificate-icons/kubernetesicon.png`
        }
    ],
    projects : [
        {
            projectName: `The COVID-19 Hospital Impact Model for Epidemics`,
            projectDuration: `Mar 2020 – May 2020`,
            projectDetails: `The CHIME (COVID-19 Hospital Impact Model for Epidemics) 
                Application is designed to assist hospitals and public health 
                officials with understanding hospital capacity needs as they 
                relate to the COVID pandemic.`,
            projectLink: `https://github.com/nived15/chime`
        },
        {
            projectName: `Exam Automation with Ansible`,
            projectDuration: `Sep 2018 – Sep 2019`,
            projectDetails: `Build software that automatically builds a virtualized 
                exam environment using KVM and Ansible. Once the exam time is over the 
                software would automatically grade the candidate's exam and display 
                results on their screens. Results would provide a summary of which parts 
                of the questions were incorrect and therefore which topics the candidate 
                has to focus more on.`,
        },
        {
            projectName: `DFort: DDoS Mitigation in Openstack cloud using Priority based algorithm`,
            projectDuration: `Sep 2017 – Nov 2017`,
            projectDetails: [
                `Build Openstack cloud on Centos 7`,
                `Configure 3 instances with networking and required applications`,
                `Mitigate Ddos using apache prefork and mpm modules..`
            ],
            projectsDetailsList: true
        }
    ],
    socialMedia: {
        linkedIn: `https://www.linkedin.com/in/nivedv`,
        fb: `https://www.facebook.com/nivedv`,
        twitter: `https://twitter.com/@NivedV1508`,
        medium: `https://nivedv.medium.com/`
    },
    sectionColorChangePoints: {
        mobile: {
            coverSection: 750,
            skillsSection: 1600,
            certificationsSection: 3200,
            projectsSection: 4900,
            socialMediaSection: 5500 
        },
        small: {
            coverSection: 750,
            skillsSection: 1600,
            certificationsSection: 2900,
            projectsSection: 4300,
            socialMediaSection: 5000
        },
        large: {
            coverSection: 1100,
            skillsSection: 1800,
            certificationsSection: 3100,
            projectsSection: 4200,
            socialMediaSection: 4900
        }
    }
} 