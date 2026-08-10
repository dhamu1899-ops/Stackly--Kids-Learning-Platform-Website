// Central Data Store for Stackly Kids Preschool & Academy

window.COURSES_DATA = [
  {
    id: 'math-league',
    title: 'Math League',
    price: 49,
    originalPrice: 69,
    startDate: '18 SEP',
    category: 'STEM',
    image: 'assets/images/course-1.webp',
    rating: 5,
    reviewsCount: 24,
    description: 'Fun and interactive elementary mathematics solving puzzles, logic games, and spatial reasoning for young minds.',
    duration: '8 Weeks',
    ageGroup: '4 - 7 Years',
    enrolledCount: 142,
    instructor: 'Kiran Zahid',
    badge: 'Pop'
  },
  {
    id: 'art-club',
    title: 'Art Club',
    price: 39,
    originalPrice: 59,
    category: 'Creative Arts',
    image: 'assets/images/course-2.webp',
    rating: 5,
    reviewsCount: 38,
    description: 'Unleash your child’s creativity with clay modeling, water color painting, finger printing, and craft masterpieces.',
    duration: '10 Weeks',
    ageGroup: '3 - 6 Years',
    enrolledCount: 210,
    instructor: 'Elspethylenia',
    badge: 'Popular'
  },
  {
    id: 'music-class',
    title: 'Music Class',
    price: 75,
    originalPrice: 85,
    category: 'Music',
    image: 'assets/images/course-3.webp',
    rating: 5,
    reviewsCount: 19,
    description: 'Introduction to rhythm, melody, acoustic instruments, percussion instruments, and vocal exercises for toddlers.',
    duration: '12 Weeks',
    ageGroup: '3 - 8 Years',
    enrolledCount: 95,
    instructor: 'Tito Tito'
  },
  {
    id: 'orchestra-player',
    title: 'Orchestra Player',
    price: 29,
    originalPrice: 36,
    startDate: '18 SEP',
    category: 'Music',
    image: 'assets/images/course-4.webp',
    rating: 4,
    reviewsCount: 15,
    description: 'Violin, flute, and piano basics in a group ensemble setting that builds listening skills and musical harmony.',
    duration: '6 Weeks',
    ageGroup: '5 - 10 Years',
    enrolledCount: 78,
    instructor: 'George Timothy'
  },
  {
    id: 'engineering-class',
    title: 'Engineering Class',
    price: 49,
    originalPrice: 69,
    startDate: '18 SEP',
    category: 'STEM',
    image: 'assets/images/course-5.webp',
    rating: 5,
    reviewsCount: 42,
    description: 'Hands-on LEGO robotics, simple machine construction, and physics games designed for curious young engineers.',
    duration: '8 Weeks',
    ageGroup: '6 - 11 Years',
    enrolledCount: 180,
    instructor: 'Evazenzi'
  },
  {
    id: 'painting-class',
    title: 'Painting Class',
    price: 'Free',
    category: 'Creative Arts',
    image: 'assets/images/course-6.webp',
    rating: 5,
    reviewsCount: 56,
    description: 'Free weekly open canvas painting workshop focusing on colors, blending technique, and joyful self-expression.',
    duration: 'Ongoing',
    ageGroup: '3 - 8 Years',
    enrolledCount: 350,
    instructor: 'Elspethylenia',
    badge: 'FREE'
  },
  {
    id: 'computer-programming',
    title: 'Computer Programming',
    price: 39,
    originalPrice: 59,
    category: 'Technology',
    image: 'assets/images/course-7.webp',
    rating: 5,
    reviewsCount: 29,
    description: 'Visual drag-and-drop Scratch block coding, interactive storytelling, and simple kid-friendly game development.',
    duration: '10 Weeks',
    ageGroup: '6 - 12 Years',
    enrolledCount: 165,
    instructor: 'Debora'
  },
  {
    id: 'western-dance-class',
    title: 'Western Dance Class',
    price: 'Free',
    category: 'Dance',
    image: 'assets/images/course-8.webp',
    rating: 4,
    reviewsCount: 31,
    description: 'Energetic movement class with hip hop, pop jazz, and creative gymnastics movements set to upbeat kid melodies.',
    duration: 'Ongoing',
    ageGroup: '4 - 9 Years',
    enrolledCount: 290,
    instructor: 'Flora',
    badge: 'FREE'
  },
  {
    id: 'kids-playing-club',
    title: 'Kids Playing Club',
    price: 79,
    originalPrice: 89,
    category: 'Indoor & Sports',
    image: 'assets/images/course-9.webp',
    rating: 5,
    reviewsCount: 64,
    description: 'Guided social play, team building games, obstacle courses, and gross motor skill enhancement in safety zones.',
    duration: '12 Weeks',
    ageGroup: '2 - 6 Years',
    enrolledCount: 310,
    instructor: 'Al Group'
  },
  {
    id: 'literary-magazine-club',
    title: 'Literary Magazine Club',
    price: 19,
    originalPrice: 29,
    category: 'Language',
    image: 'assets/images/course-10.webp',
    rating: 5,
    reviewsCount: 22,
    description: 'Storytelling, poem writing, illustration design, and publishing our quarterly school magazine created by kids.',
    duration: '10 Weeks',
    ageGroup: '6 - 12 Years',
    enrolledCount: 88,
    instructor: 'Aurora Jackson'
  }
];

window.EVENTS_DATA = [
  {
    id: 'teacher-vs-student',
    title: 'Teacher vs. Student Day',
    dateDay: '11',
    dateMonth: 'Feb',
    fullDate: 'February 11, 2026',
    time: '09:00 AM - 02:00 PM',
    location: 'Vitoria Main Hall',
    category: 'Sports & Fun',
    description: 'A cheerful friendly competition featuring sports relays, trivia quizzes, tug of war, and talent shows between teachers and kids!',
    image: 'assets/images/event-1.webp',
    price: 'Free Entry'
  },
  {
    id: 'community-get-together',
    title: 'Community Get Together',
    dateDay: '15',
    dateMonth: 'Feb',
    fullDate: 'February 15, 2026',
    time: '10:00 AM - 04:00 PM',
    location: 'School Courtyard',
    category: 'Community',
    description: 'Annual gathering for parents, alumni, teachers, and students to celebrate cultural diversity, delicious food stalls, and games.',
    image: 'assets/images/event-2.webp',
    price: 'Free Entry'
  },
  {
    id: 'winter-feast-family',
    title: 'Winter Feast Family Event',
    dateDay: '20',
    dateMonth: 'Feb',
    fullDate: 'February 20, 2026',
    time: '05:00 PM - 08:30 PM',
    location: 'Central Dining Hall',
    category: 'Family & Dining',
    description: 'Cozy family evening with warm soup, campfire stories, choir music performances, and homemade baked treats.',
    image: 'assets/images/event-3.webp',
    price: '₹500 / Family'
  },
  {
    id: 'dinner-night-event',
    title: 'Dinner Night Event',
    dateDay: '28',
    dateMonth: 'Feb',
    fullDate: 'February 28, 2026',
    time: '06:00 PM - 09:00 PM',
    location: 'Grand Ballroom',
    category: 'Gala',
    description: 'Annual fundraising dinner celebrating student achievements with live acoustic ensemble performances and awards.',
    image: 'assets/images/event-4.webp',
    price: '₹800 / Ticket'
  },
  {
    id: 'game-day-event',
    title: 'Game Day Event',
    dateDay: '05',
    dateMonth: 'Mar',
    fullDate: 'March 05, 2026',
    time: '09:30 AM - 01:30 PM',
    location: 'Sports Field & Complex',
    category: 'Sports',
    description: 'Action-packed morning of track activities, sack races, basketball shootouts, and giant board games on the green lawn.',
    image: 'assets/images/event-1.webp',
    price: 'Free Entry'
  },
  {
    id: 'earth-day-party',
    title: 'Earth Day Party',
    dateDay: '12',
    dateMonth: 'Mar',
    fullDate: 'March 12, 2026',
    time: '10:00 AM - 02:00 PM',
    location: 'Green Botanical Park',
    category: 'Eco & Nature',
    description: 'Planting saplings, butterfly garden tours, recycled art crafting, and learning about eco-friendly living with fun exhibits.',
    image: 'assets/images/event-6.webp',
    price: 'Free Entry'
  },
  {
    id: 'birthday-party-night',
    title: 'Birthday Party Night',
    dateDay: '18',
    dateMonth: 'Mar',
    fullDate: 'March 18, 2026',
    time: '04:00 PM - 07:00 PM',
    location: 'Kids Activity Zone',
    category: 'Celebration',
    description: 'Monthly mega birthday party celebrating all kids born in March with customized cupcakes, magic show, and dancing.',
    image: 'assets/images/event-7.webp',
    price: 'Free for Members'
  },
  {
    id: 'drama-production-event',
    title: 'Drama Production Event',
    dateDay: '25',
    dateMonth: 'Mar',
    fullDate: 'March 25, 2026',
    time: '05:30 PM - 08:00 PM',
    location: 'School Main Auditorium',
    category: 'Arts & Theater',
    description: 'Spring musical stage play performed by preschool and primary grade students featuring custom costumes and singing.',
    image: 'assets/images/event-8.webp',
    price: '₹350 / Ticket'
  }
];

window.TEACHERS_DATA = [
  {
    id: 'aurora-jackson',
    name: 'Aurora Jackson',
    title: 'Senior Educator',
    subject: 'English & Literature',
    image: 'assets/images/teacher-1.webp',
    bio: 'Passionate language coach with over 10 years experience encouraging phonics, creative writing, and public speaking in children.',
    experience: '10+ Years',
    qualification: 'M.A. in Early Childhood Education',
    color: 'border-pink-300 bg-pink-50 text-pink-700',
    email: 'aurora@example.com'
  },
  {
    id: 'cosmi',
    name: 'Cosmi',
    title: 'Language Instructor',
    subject: 'French Language',
    image: 'assets/images/teacher-2.webp',
    bio: 'Native French speaker specializing in playful immersive foreign language learning through songs, puppetry, and stories.',
    experience: '7 Years',
    qualification: 'B.A. Applied Linguistics',
    color: 'border-sky-300 bg-sky-50 text-sky-700',
    email: 'cosmi@example.com'
  },
  {
    id: 'debora',
    name: 'Debora',
    title: 'Classroom Lead',
    subject: 'Classroom Management',
    image: 'assets/images/teacher-3.webp',
    bio: 'Focuses on building warm social-emotional learning routines, peer collaboration, and inclusive classroom environments.',
    experience: '12 Years',
    qualification: 'M.Ed Child Psychology',
    color: 'border-amber-300 bg-amber-50 text-amber-700',
    email: 'debora@example.com'
  },
  {
    id: 'elspeth',
    name: 'Elspeth',
    title: 'Montessori Specialist',
    subject: 'Montessori Methods',
    image: 'assets/images/teacher-4.webp',
    bio: 'Certified AMI Montessori educator guiding child-led tactile discovery, motor coordination, and independent problem solving.',
    experience: '9 Years',
    qualification: 'AMI Certified Montessori Specialist',
    color: 'border-emerald-300 bg-emerald-50 text-emerald-700',
    email: 'elspeth@example.com'
  },
  {
    id: 'elspethylenia',
    name: 'Elspethylenia',
    title: 'Creative Art Teacher',
    subject: 'Art & Craft',
    image: 'assets/images/teacher-5.webp',
    bio: 'Visual artist dedicated to cultivating motor precision and artistic joy through sculpturing, painting, and paper crafts.',
    experience: '6 Years',
    qualification: 'B.F.A Fine Arts & Education',
    color: 'border-purple-300 bg-purple-50 text-purple-700',
    email: 'elspethylenia@example.com'
  },
  {
    id: 'evazenzi',
    name: 'Evazenzi',
    title: 'STEM Coordinator',
    subject: 'Physical Science',
    image: 'assets/images/teacher-6.webp',
    bio: 'Introduces basic scientific inquiry, nature exploration, and fun physical experiments in simple, safe ways.',
    experience: '8 Years',
    qualification: 'M.Sc Science Education',
    color: 'border-cyan-300 bg-cyan-50 text-cyan-700',
    email: 'evazenzi@example.com'
  },
  {
    id: 'flora',
    name: 'Flora',
    title: 'Assistant Instructor',
    subject: 'French & Music',
    image: 'assets/images/teacher-7.webp',
    bio: 'Enthusiastic educator bringing music, rhythm, and gentle French conversational basics into daily preschool play.',
    experience: '5 Years',
    qualification: 'B.A. Primary Education',
    color: 'border-rose-300 bg-rose-50 text-rose-700',
    email: 'flora@example.com'
  },
  {
    id: 'george-timothy',
    name: 'George Timothy',
    title: 'Language Instructor',
    subject: 'Italian Instructor',
    image: 'assets/images/teacher-8.webp',
    bio: 'Specialized in musical language integration, singing rhymes, and early Italian vocabulary for multilingual development.',
    experience: '7 Years',
    qualification: 'M.A. Foreign Pedagogy',
    color: 'border-yellow-300 bg-yellow-50 text-yellow-700',
    email: 'george@example.com'
  },
  {
    id: 'kiran-zahid',
    name: 'Kiran Zahid',
    title: 'Mathematics Educator',
    subject: 'Spanish & Math',
    image: 'assets/images/teacher-9.webp',
    bio: 'Believes numbers and logic can be taught as interactive games that kindle curiosity and confidence.',
    experience: '6 Years',
    qualification: 'B.Sc Math Education',
    color: 'border-orange-300 bg-orange-50 text-orange-700',
    email: 'kiran@example.com'
  },
  {
    id: 'al-group',
    name: 'Al Group',
    title: 'Physical Education',
    subject: 'Sports Coach',
    image: 'assets/images/teacher-10.webp',
    bio: 'Fosters physical agility, team spirit, sportsmanship, and fun active habits across all grade levels.',
    experience: '11 Years',
    qualification: 'B.S. Kinesiology',
    color: 'border-blue-300 bg-blue-50 text-blue-700',
    email: 'algroup@example.com'
  },
  {
    id: 'tito-tito',
    name: 'Tito Tito',
    title: 'Rhythm Master',
    subject: 'Music & Drums',
    image: 'assets/images/teacher-11.webp',
    bio: 'Brings joy through hand drumming, rhythm ensembles, and ear training exercises for young children.',
    experience: '9 Years',
    qualification: 'Degree in Music Performance',
    color: 'border-teal-300 bg-teal-50 text-teal-700',
    email: 'tito@example.com'
  },
  {
    id: 'wilma',
    name: 'Wilma',
    title: 'Cultural Mentor',
    subject: 'Spanish & Culture',
    image: 'assets/images/teacher-12.webp',
    bio: 'Teaches Spanish language through storytelling, folk songs, dance, and creative celebrations.',
    experience: '8 Years',
    qualification: 'B.A. Spanish Literature',
    color: 'border-lime-300 bg-lime-50 text-lime-700',
    email: 'wilma@example.com'
  }
];

window.TOYS_DATA = [
  {
    id: 'bed-time-story-book',
    name: 'Bed Time Story Book',
    price: 8.50,
    originalPrice: 8.55,
    rating: 5,
    reviewsCount: 14,
    image: 'assets/images/toy-1.webp',
    category: 'Books',
    inStock: true
  },
  {
    id: 'geometrics-learning-blocks',
    name: 'Geometrics Learning Blocks',
    price: 14.75,
    originalPrice: 15.75,
    rating: 5,
    reviewsCount: 28,
    image: 'assets/images/toy-2.webp',
    category: 'Wooden Toys',
    inStock: true,
    isNew: true
  },
  {
    id: 'wooden-abacus',
    name: 'Wooden Abacus',
    price: 22.45,
    originalPrice: 22.85,
    rating: 5,
    reviewsCount: 32,
    image: 'assets/images/toy-3.webp',
    category: 'Math Toys',
    inStock: true
  },
  {
    id: 'astronomical-telescope',
    name: 'Astronomical Telescope',
    price: 22.45,
    originalPrice: 23.10,
    rating: 4,
    reviewsCount: 19,
    image: 'assets/images/toy-4.webp',
    category: 'Science',
    inStock: true
  },
  {
    id: 'toy-fruits-vegetables',
    name: 'Toy Fruits & Vegetables',
    price: 9.80,
    originalPrice: 12.15,
    rating: 5,
    reviewsCount: 45,
    image: 'assets/images/toy-5.webp',
    category: 'Role Play',
    inStock: true
  },
  {
    id: 'alphabets-learning-blocks',
    name: 'Alphabets Learning Blocks',
    price: 17.50,
    originalPrice: 17.40,
    rating: 5,
    reviewsCount: 52,
    image: 'assets/images/toy-6.webp',
    category: 'Puzzles',
    inStock: true
  },
  {
    id: 'plastic-building-blocks',
    name: 'Plastic Building Blocks',
    price: 8.15,
    originalPrice: 8.25,
    rating: 4,
    reviewsCount: 23,
    image: 'assets/images/toy-7.webp',
    category: 'Construction',
    inStock: true
  },
  {
    id: 'electronic-keyboard',
    name: 'Electronic Keyboard',
    price: 15.50,
    originalPrice: 15.65,
    rating: 5,
    reviewsCount: 39,
    image: 'assets/images/toy-8.webp',
    category: 'Music',
    inStock: true
  }
];

window.TESTIMONIALS_DATA = [
  {
    id: '1',
    name: 'Carolina Tonina',
    parentRole: 'Mother of Leo (Age 4)',
    rating: 5,
    quote: 'Stackly Salem has transformed my son’s confidence! He loves going to school every single morning and comes home with bright stories about painting and rhythm class.',
    avatar: 'assets/images/testimonial-1.webp',
    bgColor: 'bg-orange-500'
  },
  {
    id: '2',
    name: 'Salvatrice Ilary',
    parentRole: 'Mother of Sophia (Age 5)',
    rating: 5,
    quote: 'The teachers are immensely compassionate and attentive. The Montessori approach gives my daughter freedom to explore while instilling strong discipline.',
    avatar: 'assets/images/testimonial-2.webp',
    bgColor: 'bg-yellow-500'
  },
  {
    id: '3',
    name: 'Dorotea Ninfa',
    parentRole: 'Mother of Liam (Age 3)',
    rating: 5,
    quote: 'Extremely clean campus, friendly staff, and fantastic STEM programs even for toddlers. Highly recommended to any parent seeking top quality early education!',
    avatar: 'assets/images/testimonial-3.webp',
    bgColor: 'bg-emerald-500'
  },
  {
    id: '4',
    name: 'Nella Gerarda',
    parentRole: 'Mother of Mia (Age 6)',
    rating: 5,
    quote: 'My daughter learned French and math so naturally through games and music. The community events like Winter Feast are memories we cherish forever.',
    avatar: 'assets/images/testimonial-4.webp',
    bgColor: 'bg-pink-500'
  }
];

window.BLOG_POSTS = [
  {
    id: '1',
    title: 'How Interactive Play Accelerates Early Child Brain Development',
    date: 'February 08, 2026',
    author: 'Aurora Jackson',
    category: 'Child Psychology',
    image: 'assets/images/blog-1.webp',
    snippet: 'Discover why tactile wooden blocks, sensory play, and role-play games create critical neural pathways in children aged 2 to 6.',
    readTime: '4 min read',
    commentsCount: 8
  },
  {
    id: '2',
    title: '10 Fun & Easy At-Home Science Experiments For Preschoolers',
    date: 'January 28, 2026',
    author: 'Evazenzi',
    category: 'STEM Learning',
    image: 'assets/images/blog-2.webp',
    snippet: 'Simple ingredients from your kitchen like baking soda, food coloring, and water can ignite a lifetime passion for scientific inquiry.',
    readTime: '6 min read',
    commentsCount: 14
  },
  {
    id: '3',
    title: 'Choosing The Right Preschool: Montessori vs Reggio Emilia',
    date: 'January 15, 2026',
    author: 'Elspeth',
    category: 'Parenting Guide',
    image: 'assets/images/blog-3.webp',
    snippet: 'A comprehensive breakdown comparing independent exploration with community project-based early education models.',
    readTime: '5 min read',
    commentsCount: 22
  }
];

window.GALLERY_IMAGES = [
  { url: 'assets/images/gallery-1.webp', title: 'Art & Craft Session' },
  { url: 'assets/images/gallery-2.webp', title: 'Interactive Learning' },
  { url: 'assets/images/gallery-3.webp', title: 'Playground Outdoor Games' },
  { url: 'assets/images/gallery-4.webp', title: 'Classroom Story Time' },
  { url: 'assets/images/gallery-5.webp', title: 'Finger Painting Workshop' },
  { url: 'assets/images/gallery-6.webp', title: 'Music & Instrument Ensemble' }
];

window.INSTAGRAM_POSTS = [
  'assets/images/insta-1.webp',
  'assets/images/insta-2.webp',
  'assets/images/insta-3.webp',
  'assets/images/insta-4.webp',
  'assets/images/insta-5.webp',
  'assets/images/insta-6.webp'
];

window.DEMO_USER_SESSION = {
  id: 'usr_demo_1',
  name: 'Aarav Kumar (Parent: Anand S.)',
  role: 'student',
  email: 'aarav.parent@stackly.com',
  gradeClass: 'Grade 1 Alpha • Roll #SK-2026',
  avatar: 'assets/images/user-avatar.webp'
};
