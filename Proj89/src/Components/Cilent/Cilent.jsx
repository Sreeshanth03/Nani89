import React, { useEffect, useRef } from 'react';
import "./Cilent.css"

const Client = () => {
  const testimonials = [
    {
      quote: "Futureinvo delivered not just code — they delivered insight, performance, and ROI.",
      author: "Shruti Mehta, CTO, Edulus",
      industry: "Education Tech"
    },
    {
      quote: "Their AI capabilities changed the way we run analytics. More than a vendor — an innovation partner.",
      author: "Nikhil Jain, Head of Ops, RetailInsights",
      industry: "Retail Analytics"
    },
    {
      quote: "Our call center efficiency improved by 40% with their AI-powered BPO solutions. Game-changing technology!",
      author: "Rajesh Verma, Director, CallCare Solutions",
      industry: "BPO Services"
    },
    {
      quote: "Our ecommerce conversions increased by 35% after implementing their recommendation engine.",
      author: "Priya Sharma, CEO, UrbanCart",
      industry: "Ecommerce"
    },
    {
      quote: "The mobile app they developed helped us triple our user base in just 6 months.",
      author: "Amit Patel, Product Manager, FinTech Solutions",
      industry: "Financial Services"
    },
    {
      quote: "Their cloud migration strategy saved us 60% in infrastructure costs while improving performance.",
      author: "Deepak Kumar, CIO, HealthCare Plus",
      industry: "Healthcare IT"
    },
    {
      quote: "The AI chatbot they implemented reduced our customer support tickets by 75%.",
      author: "Neha Gupta, Customer Success Lead, ShopEasy",
      industry: "Retail"
    },
    {
      quote: "Their data analytics platform gave us real-time insights we never had access to before.",
      author: "Rahul Desai, Analytics Head, MediaMetrics",
      industry: "Media & Entertainment"
    },
    {
      quote: "The cybersecurity solutions they implemented made our systems virtually impenetrable.",
      author: "Vikram Singh, CISO, BankSecure",
      industry: "Banking"
    },
    {
      quote: "Their UI/UX redesign increased our conversion rates by 28% almost immediately.",
      author: "Sanjay Rao, Digital Director, TravelNest",
      industry: "Travel Tech"
    },
    {
      quote: "The custom ERP system they built streamlined our operations across 12 countries.",
      author: "Meera Krishnan, COO, GlobalManufact",
      industry: "Manufacturing"
    },
    {
      quote: "Their digital marketing strategy doubled our qualified leads in just 3 months.",
      author: "Arjun Kapoor, Marketing Head, TechStart",
      industry: "SaaS"
    },
    {
      quote: "The IoT solution they developed helped us reduce equipment downtime by 65%.",
      author: "Anjali Mishra, Plant Manager, SmartFactory",
      industry: "Industrial IoT"
    },
    {
      quote: "Their blockchain implementation brought unprecedented transparency to our supply chain.",
      author: "Rohan Mehta, Supply Chain Director, FreshGoods",
      industry: "Logistics"
    },
    {
      quote: "The machine learning models they built helped us predict market trends with 92% accuracy.",
      author: "Kavita Joshi, Research Lead, CapitalInvest",
      industry: "Investment Banking"
    }
  ];

  const gridRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const startAutoScroll = () => {
      let scrollAmount = 0;
      const scrollStep = 1;
      const cardWidth = 350; // Match this with your card min-width
      const gap = 30; // Match this with your gap size

      scrollInterval.current = setInterval(() => {
        scrollAmount += scrollStep;
        grid.scrollLeft = scrollAmount;

        // Reset scroll position when reaching end
        if (scrollAmount >= grid.scrollWidth - grid.clientWidth) {
          scrollAmount = 0;
          grid.scrollLeft = 0;
        }
      }, 30); // Adjust speed here (lower = faster)
    };

    startAutoScroll();

    // Pause on hover
    const handleMouseEnter = () => clearInterval(scrollInterval.current);
    const handleMouseLeave = () => startAutoScroll();

    grid.addEventListener('mouseenter', handleMouseEnter);
    grid.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval.current);
      grid.removeEventListener('mouseenter', handleMouseEnter);
      grid.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Client Testimonials</h1>
      <div className="testimonials-scroll-container">
        <div className="testimonials-grid" ref={gridRef}>
          {testimonials.map((testimonial, index) => (
            <div 
              className="testimonial-card"
              key={index}
              data-industry={testimonial.industry}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="quote-icon">“</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">{testimonial.author}</div>
              <div className="testimonial-industry">{testimonial.industry}</div>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;