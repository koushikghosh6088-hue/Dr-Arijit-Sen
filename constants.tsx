
import React from 'react';
import { Heart, Activity, Thermometer, Brain, Wind, Droplets } from 'lucide-react';
import { NavItem, Service, Qualification, BlogPost, Testimonial, UserAppointment } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'BLOG', href: '#blog' },
  { label: 'CONTACT', href: '#footer' },
];

export const SERVICES: Service[] = [
  {
    id: 'hypertension',
    title: 'Hypertension',
    bengaliTitle: 'প্রেসার',
    description: 'Expert management of blood pressure to prevent long-term cardiovascular complications.',
    icon: <Activity className="w-6 h-6 text-blue-600" />,
    fullDescription: 'Comprehensive hypertension management focusing on lifestyle modifications, medication optimization, and regular monitoring to prevent heart disease, stroke, and kidney damage.',
    symptoms: [
      'Persistent headaches, especially in the morning',
      'Dizziness and lightheadedness',
      'Chest pain or tightness',
      'Shortness of breath during activities',
      'Nosebleeds (in severe cases)',
      'Blurred vision or visual disturbances'
    ],
    treatments: [
      'Personalized medication plans with ACE inhibitors, beta-blockers, or calcium channel blockers',
      'Regular blood pressure monitoring and tracking',
      'Dietary modifications including DASH diet implementation',
      'Stress management techniques and relaxation therapy',
      'Exercise prescription tailored to individual capacity',
      'Regular follow-ups to adjust treatment as needed'
    ],
    prevention: [
      'Maintain healthy weight (BMI 18.5-24.9)',
      'Reduce sodium intake to less than 2,300mg daily',
      'Regular physical activity (30 minutes, 5 days/week)',
      'Limit alcohol consumption',
      'Quit smoking and tobacco use',
      'Manage stress through meditation or yoga'
    ]
  },
  {
    id: 'diabetes',
    title: 'Type 2 Diabetes',
    bengaliTitle: 'সুগার',
    description: 'Comprehensive diabetes care focused on glucose control and lifestyle modification.',
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
    fullDescription: 'Holistic diabetes management combining medication, nutrition counseling, and lifestyle changes to maintain optimal blood sugar levels and prevent complications.',
    symptoms: [
      'Increased thirst and frequent urination',
      'Unexplained weight loss or gain',
      'Extreme fatigue and weakness',
      'Blurred vision',
      'Slow-healing wounds or frequent infections',
      'Tingling or numbness in hands and feet'
    ],
    treatments: [
      'Individualized medication regimen (Metformin, insulin, or other agents)',
      'Continuous glucose monitoring and HbA1c tracking',
      'Customized meal planning and carbohydrate counting',
      'Insulin therapy management when required',
      'Complication screening (eyes, kidneys, nerves)',
      'Patient education on self-management'
    ],
    prevention: [
      'Maintain healthy body weight',
      'Follow a balanced, low-glycemic diet',
      'Exercise regularly (150 minutes/week)',
      'Regular health screenings if at risk',
      'Avoid sugary beverages and processed foods',
      'Get adequate sleep (7-8 hours nightly)'
    ]
  },
  {
    id: 'thyroid',
    title: 'Thyroid Disorders',
    bengaliTitle: 'থাইরয়েড',
    description: 'Diagnosis and treatment of hormonal imbalances affecting metabolism and energy.',
    icon: <Thermometer className="w-6 h-6 text-blue-600" />,
    fullDescription: 'Expert evaluation and management of hypothyroidism, hyperthyroidism, and thyroid nodules with hormone replacement therapy and regular monitoring.',
    symptoms: [
      'Unexplained weight changes',
      'Fatigue and low energy levels',
      'Hair loss or thinning',
      'Sensitivity to cold or heat',
      'Irregular menstrual cycles',
      'Mood changes (depression or anxiety)'
    ],
    treatments: [
      'Thyroid hormone replacement therapy (Levothyroxine)',
      'Regular TSH and thyroid hormone level monitoring',
      'Medication dosage adjustments based on lab results',
      'Treatment of underlying autoimmune conditions',
      'Nutritional counseling for thyroid health',
      'Referral for surgical evaluation if needed'
    ],
    prevention: [
      'Ensure adequate iodine intake',
      'Regular thyroid function screening',
      'Manage stress effectively',
      'Avoid excessive soy consumption',
      'Maintain healthy selenium levels',
      'Monitor family history and get tested early'
    ]
  },
  {
    id: 'stroke',
    title: 'Stroke Care',
    bengaliTitle: 'স্ট্রোক',
    description: 'Specialized focus on stroke prevention and recovery management.',
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    fullDescription: 'Comprehensive stroke prevention strategies and post-stroke rehabilitation guidance to minimize risk and optimize recovery outcomes.',
    symptoms: [
      'Sudden numbness or weakness in face, arm, or leg',
      'Confusion or trouble speaking',
      'Vision problems in one or both eyes',
      'Difficulty walking or loss of balance',
      'Severe headache with no known cause',
      'Dizziness or loss of coordination'
    ],
    treatments: [
      'Emergency stroke protocol and rapid assessment',
      'Blood pressure and cholesterol management',
      'Antiplatelet or anticoagulant therapy',
      'Rehabilitation therapy coordination',
      'Risk factor modification programs',
      'Carotid artery evaluation and management'
    ],
    prevention: [
      'Control blood pressure and diabetes',
      'Maintain healthy cholesterol levels',
      'Exercise regularly and stay active',
      'Quit smoking immediately',
      'Limit alcohol consumption',
      'Recognize warning signs (FAST: Face, Arms, Speech, Time)'
    ]
  },
  {
    id: 'respiratory',
    title: 'Respiratory Distress',
    bengaliTitle: 'শ্বাসকষ্ট',
    description: 'Managing asthma, COPD, and other breathing difficulties for better quality of life.',
    icon: <Wind className="w-6 h-6 text-blue-600" />,
    fullDescription: 'Specialized respiratory care including diagnosis, treatment, and management of chronic lung conditions to improve breathing and quality of life.',
    symptoms: [
      'Shortness of breath or difficulty breathing',
      'Persistent cough or wheezing',
      'Chest tightness or pain',
      'Rapid breathing or gasping',
      'Bluish lips or fingernails (severe cases)',
      'Fatigue during normal activities'
    ],
    treatments: [
      'Bronchodilator and inhaler therapy',
      'Oxygen therapy when required',
      'Pulmonary function testing',
      'Breathing exercises and techniques',
      'Treatment of underlying infections',
      'Allergen avoidance strategies'
    ],
    prevention: [
      'Avoid smoking and secondhand smoke',
      'Get vaccinated (flu, pneumonia)',
      'Minimize exposure to air pollutants',
      'Use air purifiers at home',
      'Practice breathing exercises regularly',
      'Maintain good indoor air quality'
    ]
  },
  {
    id: 'vascular',
    title: 'Vascular Diseases',
    bengaliTitle: 'ভ্যাসকুলার',
    description: 'Expert care for diseases of the blood vessels and circulation system.',
    icon: <Heart className="w-6 h-6 text-blue-600" />,
    fullDescription: 'Comprehensive vascular disease management including peripheral artery disease, deep vein thrombosis, and circulatory disorders.',
    symptoms: [
      'Leg pain or cramping when walking',
      'Swelling in legs or ankles',
      'Coldness in lower leg or foot',
      'Skin color changes on legs',
      'Slow-healing sores on feet or legs',
      'Weak or absent pulse in legs or feet'
    ],
    treatments: [
      'Antiplatelet and anticoagulant medications',
      'Cholesterol-lowering therapy',
      'Blood pressure optimization',
      'Supervised exercise programs',
      'Wound care for vascular ulcers',
      'Vascular surgery referral when indicated'
    ],
    prevention: [
      'Control diabetes and blood pressure',
      'Quit smoking completely',
      'Exercise regularly to improve circulation',
      'Maintain healthy cholesterol levels',
      'Avoid prolonged sitting or standing',
      'Wear compression stockings if recommended'
    ]
  },
];

export const QUALIFICATIONS: Qualification[] = [
  {
    institution: 'Burdwan Medical College & Hospital',
    degree: 'MBBS (HONS)',
    period: 'Bachelor of Medicine & Surgery',
  },
  {
    institution: 'ANAMOY SSWH',
    degree: 'Ex-attached: Cardiology & Neuromedicine',
    period: 'Specialized Clinical Experience',
  },
  {
    institution: 'Sharanya Superspeciality Hospital',
    degree: 'Current ICU Resident',
    period: 'Critical Care & Emergency',
  },
];

export const BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Hypertension: The Silent Killer',
    category: 'Heart Health',
    date: 'March 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800&h=500',
    excerpt: 'Hypertension often shows no symptoms but can lead to serious heart problems. Learn how to manage it...',
    content: 'Hypertension, commonly known as high blood pressure, is a condition where the force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease. You can have high blood pressure for years without any symptoms. Even without symptoms, damage to blood vessels and your heart continues and can be detected. Uncontrolled high blood pressure increases your risk of serious health problems, including heart attack and stroke. Most people with high blood pressure have no signs or symptoms, even if blood pressure readings reach dangerously high levels. A few people with high blood pressure may have headaches, shortness of breath or nosebleeds, but these signs and symptoms aren\'t specific and usually don\'t occur until high blood pressure has reached a severe or life-threatening stage.',
    author: 'Dr. Arijit Sen'
  },
  {
    id: '2',
    title: 'Living Well with Type 2 Diabetes',
    category: 'Diabetes',
    date: 'March 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800&h=500',
    excerpt: 'Managing blood sugar is about more than just medication. Diet and lifestyle play a crucial role...',
    content: 'Type 2 diabetes is an impairment in the way the body regulates and uses sugar (glucose) as a fuel. This long-term (chronic) condition results in too much sugar circulating in the bloodstream. Eventually, high blood sugar levels can lead to disorders of the circulatory, nervous and immune systems. In type 2 diabetes, there are primarily two interrelated problems at work. Your pancreas doesn\'t produce enough insulin — a hormone that regulates the movement of sugar into your cells — and cells respond poorly to insulin and take in less sugar. Type 2 diabetes used to be known as adult-onset diabetes, but both type 1 and type 2 diabetes can begin during childhood and adulthood. Type 2 is more common in older adults, but the increase in the number of children with obesity has led to more cases of type 2 diabetes in younger people.',
    author: 'Dr. Arijit Sen'
  },
  {
    id: '3',
    title: 'The Critical Hour: ICU Care Myths vs Facts',
    category: 'Critical Care',
    date: 'March 5, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=500',
    excerpt: 'ICU can be a scary place for families. Understanding the reality of critical care can help...',
    content: 'Intensive care units (ICUs) are specialist hospital wards that provide treatment and monitoring for people who are very ill. They\'re staffed with specially trained healthcare professionals and contain sophisticated monitoring equipment. ICUs are also sometimes called critical care units (CCUs) or intensive therapy departments (ITDs). A person might be admitted to an ICU for many reasons, including: after a serious accident, such as a road traffic accident, a severe head injury, a serious fall or severe burns; a serious short-term condition, such as a heart attack, a stroke, heart failure or kidney failure; a serious infection, such as sepsis or severe pneumonia; after major surgery – this may be a planned part of your recovery or an emergency measure if there are complications.',
    author: 'Dr. Arijit Sen'
  },
  {
    id: '4',
    title: 'Thyroid Health: More Than Just Weight',
    category: 'Hormones',
    date: 'February 28, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800&h=500',
    excerpt: 'Thyroid issues can affect your mood, energy, and heart rate. Learn the common signs...',
    content: 'The thyroid gland is a butterfly-shaped organ located in the base of your neck. It releases hormones that control metabolism — the way your body uses energy. The thyroid\'s hormones regulate vital body functions, including: breathing, heart rate, central and peripheral nervous systems, body weight, muscle strength, menstrual cycles, body temperature, cholesterol levels, and much more! When your thyroid doesn\'t work properly, it can impact your entire body. If your body makes too much thyroid hormone, you can develop a condition called hyperthyroidism. If your body makes too little thyroid hormone, it\'s called hypothyroidism. Both conditions are serious and need to be treated by a healthcare provider.',
    author: 'Dr. Arijit Sen'
  },
  {
    id: '5',
    title: 'Respiratory Wellness in Today\'s World',
    category: 'Lungs',
    date: 'February 20, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800&h=500',
    excerpt: 'Protecting your lungs from pollution and viruses is more important than ever. Here is how...',
    content: 'The respiratory system is a network of organs and tissues that help you breathe. It includes your airways, lungs and blood vessels. The muscles that power your lungs are also part of the respiratory system. These parts work together to move oxygen throughout the body and clean out waste gases like carbon dioxide. Conditions of the respiratory system can affect your breathing and the way you live. Common issues include asthma, COPD, pneumonia, and lung cancer. Maintaining respiratory health involves avoiding smoking, reducing exposure to environmental pollutants, and practicing regular breathing exercises. It is also essential to get regular check-ups, especially if you have chronic respiratory conditions.',
    author: 'Dr. Arijit Sen'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Anjali Sharma',
    text: 'Dr. Arijit explained my thyroid issues so clearly. His approach is very empathetic and clinical at the same time.',
    rating: 5,
    location: 'Burdwan',
  },
  {
    id: '2',
    name: 'Rahul Das',
    text: 'Best treatment for hypertension. My BP is now stable thanks to his diet and medication plan. Highly recommended!',
    rating: 5,
    location: 'Mahesh',
  },
  {
    id: '3',
    name: 'S. K. Mondal',
    text: 'The online consultation was very smooth. He took the time to listen to all my symptoms carefully.',
    rating: 4,
    location: 'Kolkata',
  },
  {
    id: '4',
    name: 'Priya Mukherjee',
    text: 'My diabetes management has improved significantly under Dr. Arijit\'s care. He provides practical advice that actually works in daily life.',
    rating: 5,
    location: 'Durgapur',
  },
  {
    id: '5',
    name: 'Amit Kumar',
    text: 'Very professional and knowledgeable doctor. He diagnosed my respiratory issue quickly and the treatment has been very effective.',
    rating: 5,
    location: 'Asansol',
  },
  {
    id: '6',
    name: 'Meera Banerjee',
    text: 'Dr. Arijit\'s ICU experience really shows in his approach. He handled my father\'s critical condition with expertise and compassion.',
    rating: 5,
    location: 'Burdwan',
  },
  {
    id: '7',
    name: 'Rajesh Ghosh',
    text: 'Excellent doctor! He takes time to explain everything and doesn\'t rush through consultations. Very satisfied with the care.',
    rating: 5,
    location: 'Raniganj',
  },
  {
    id: '8',
    name: 'Sunita Devi',
    text: 'My stroke recovery has been smooth thanks to Dr. Arijit\'s guidance. He regularly follows up and adjusts treatment as needed.',
    rating: 5,
    location: 'Kalna',
  },
];

export const INITIAL_USER_APPOINTMENTS: UserAppointment[] = [
  {
    id: 'apt-1',
    date: '2024-03-30',
    time: '10:30 AM',
    type: 'Offline',
    status: 'Confirmed',
    doctorName: 'Dr. Arijit',
  },
  {
    id: 'apt-2',
    date: '2024-04-06',
    time: '04:00 PM',
    type: 'Online',
    status: 'Pending',
    doctorName: 'Dr. Arijit',
  },
];
