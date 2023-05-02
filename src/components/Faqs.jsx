import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is Elimufy and who is it designed for?',
      answer:
        "Elimufy is a cutting-edge School Information Management System (SIMS) specifically designed for preschools and kindergartens. It streamlines daily operations and management tasks, allowing educators and administrators to focus on providing quality early education to their students.",
    },
    {
      question: "How does Elimufy ensure the security and privacy of our school's data?",
      answer: "Elimufy prioritizes the security and privacy of your school's data. Our platform uses role-based access control, ensuring that sensitive information is only accessible to authorized personnel. Additionally, we employ industry-standard encryption and secure data storage practices to protect your institution's valuable information.",
    },
    {
      question: "Can we customize Elimufy to suit our preschool or kindergarten's unique needs?",
      answer:
        "Yes, Elimufy is designed with flexibility in mind. Our platform allows you to customize various features, such as class structures, curriculum planning, and report formats, to better align with your institution's specific requirements.",
    },
  ],
  [
    {
      question: "How can we integrate our existing data into Elimufy?",
      answer:
        "Elimufy's onboarding team will guide you through the data migration process. Our platform supports importing data from various formats, making it easy to transfer your existing records into the system.",
    },
    {
      question:
        'Does Elimufy offer any training and support for users?',
      answer:
        "Absolutely! Elimufy provides comprehensive training and support to ensure a smooth transition for your staff. We offer video tutorials, user guides, and live webinars, along with responsive customer support to address any questions or concerns you may have.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
