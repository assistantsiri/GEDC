document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project data
    const projects = [
        {
            title: "Geo Tower",
            location: "Downtown District",
            progress: 75,
            image: "project1.jpg",
            description: "45-story commercial tower with earthquake-resistant design"
        },
        {
            title: "Riverfront Residences",
            location: "East Riverside",
            progress: 40,
            image: "project2.jpg",
            description: "Luxury residential complex with sustainable features"
        },
        {
            title: "Metro Tunnel",
            location: "Central City",
            progress: 90,
            image: "project3.jpg",
            description: "Underground transportation infrastructure project"
        }
    ];

    // Upcoming projects data
    const upcomingProjects = [
        {
            date: "June 2024",
            title: "Hillside Development",
            description: "Mixed-use development on reclaimed hillside land"
        },
        {
            date: "September 2024",
            title: "Coastal Protection",
            description: "Shoreline reinforcement and flood prevention system"
        },
        {
            date: "January 2025",
            title: "Industrial Park",
            description: "State-of-the-art manufacturing and logistics complex"
        },
        {
            date: "May 2025",
            title: "Green Bridge",
            description: "Pedestrian bridge with integrated solar panels"
        }
    ];

    // Team data
    const teamMembers = [
        {
            name: "John Geotechnical",
            position: "Chief Engineer",
            image: "team1.jpg",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "#"
            }
        },
        {
            name: "Sarah Construct",
            position: "Project Manager",
            image: "team2.jpg",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "#"
            }
        },
        {
            name: "Mike Foundation",
            position: "Site Supervisor",
            image: "team3.jpg",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "#"
            }
        },
        {
            name: "Lisa Design",
            position: "Architect",
            image: "team4.jpg",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "#"
            }
        }
    ];

    // Gallery data
    const galleryItems = [
        {
            type: "projects",
            src: "gallery1.jpg",
            isVideo: false
        },
        {
            type: "projects",
            src: "gallery2.jpg",
            isVideo: false
        },
        {
            type: "team",
            src: "gallery3.jpg",
            isVideo: false
        },
        {
            type: "videos",
            src: "gallery4.jpg",
            isVideo: true,
            videoSrc: "construction.mp4"
        },
        {
            type: "projects",
            src: "gallery5.jpg",
            isVideo: false
        },
        {
            type: "team",
            src: "gallery6.jpg",
            isVideo: false
        },
        {
            type: "videos",
            src: "gallery7.jpg",
            isVideo: true,
            videoSrc: "team.mp4"
        },
        {
            type: "projects",
            src: "gallery8.jpg",
            isVideo: false
        }
    ];

    // Populate projects
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate';
        projectCard.innerHTML = `
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="project-meta">
                    <span class="project-location"><i class="fas fa-map-marker-alt"></i> ${project.location}</span>
                    <span>${project.progress}% Complete</span>
                </div>
                <div class="project-progress">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${project.progress}%" 
                            aria-valuenow="${project.progress}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <p>${project.description}</p>
                <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
            </div>
        `;
        projectGrid.appendChild(projectCard);
    });

    // Populate upcoming projects timeline
    const timeline = document.querySelector('.timeline');
    upcomingProjects.forEach((project, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate`;
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${project.date}</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button class="btn btn-sm btn-primary">Register Interest</button>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });

    // Populate team members
    const teamGrid = document.querySelector('.team-grid');
    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member animate';
        memberCard.innerHTML = `
            <div class="member-img">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.position}</p>
                <div class="member-social">
                    <a href="${member.social.linkedin}"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${member.social.twitter}"><i class="fab fa-twitter"></i></a>
                    <a href="mailto:${member.social.email}"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        `;
        teamGrid.appendChild(memberCard);
    });

    // Populate gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${item.type} animate`;
        
        if (item.isVideo) {
            galleryItem.innerHTML = `
                <a href="${item.videoSrc}" data-fancybox="gallery" data-caption="${item.type}">
                    <img src="${item.src}" alt="Video thumbnail">
                    <i class="fas fa-play play-icon"></i>
                </a>
            `;
        } else {
            galleryItem.innerHTML = `
                <a href="${item.src}" data-fancybox="gallery" data-caption="${item.type}">
                    <img src="${item.src}" alt="Gallery image">
                </a>
            `;
        }
        
        galleryGrid.appendChild(galleryItem);
    });

    // Gallery filter
    const filterButtons = document.querySelectorAll('.gallery-filter button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Set active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // Scroll animations
    const animateElements = document.querySelectorAll('.animate');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});