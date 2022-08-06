import { motion } from 'framer-motion'
import React from 'react'
import { Card } from './Card'


export const Work = () => {


    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeIn' } },
    }
    const discription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, veniam voluptate asperiores dolorum reprehenderit quaerat quod quae velit eius atque rerum debitis obcaecati corrupti necessitatibus sunt, earum sint possimus fuga voluptatibus officia iste reiciendis sed ratione. Enim cum at, ad, vero sequi veniam dolor eius, sed facilis neque molestias. Amet!"

    const eCommercialTech = ['Python', 'Django', 'Djnago Rest Framework', 'HTML6', 'Djoser', 'JSON Web Token']
    const dogFiner = ['JavaScript', 'ReactJs', 'RRD', 'HTML6', 'Axios', 'JSON Web Token']
    const schoolMangement = ['Python', 'Javascript', 'ReactJs', 'Django', 'Rest Framework', 'HTML6', 'Axios', 'JSON Web Token']

    return (
        <motion.div className='my-20' id='work' >
            <motion.h1 variants={item}
                initial='hidden'
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className='font-nunito text-center text-5xl font-bold text-pink-300 lg:text-8xl md:text-left lg:my-30'>Recent Work
            </motion.h1>

            <Card
                className="my-5"
                projectName={'E-commerical API'}
                projectDescription={discription}
                repoLink={'https://github.com/dipeshkumarsah98/E-commerical-API-django/tree/master'}
                techItems={eCommercialTech}
            />
            <Card
                projectName={'Dog Finder'}
                projectDescription={discription}
                repoLink={'https://github.com/dipeshkumarsah98/DogFinder_ReactJS'}
                techItems={dogFiner}
            />
            <Card
                projectName={'School Management System'}
                projectDescription={discription}
                repoLink={'https://github.com/dipeshkumarsah98/Student-management-system-backend'}
                techItems={schoolMangement}
            />

            <motion.div
                initial='hidden'
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className='text-center font-xl font-nunito  text-gray-300 my-10 md:text-3xl lg:text-5xl'>
                More Project coming soon....
            </motion.div>

        </motion.div>
    )
}
