// Configuration Object - Edit these values to customize content
const CONFIG = {
    // Company Information
    company: {
        name: "Batik Wikarsa",
        email: "heritage.batik@email.com",
        phone: "+62 822 1475 0615",
        address: "Cirebon, Indonesia"
    },
    
    // Products Data - Easy to modify
    products: [
        {
            id: 1,
            name: {
                en: "Traditional Sarong",
                id: "Sarung Tradisional"
            },
            description: {
                en: "Handcrafted batik sarong with classic Javanese patterns",
                id: "Sarung batik tulis dengan motif klasik Jawa"
            },
            price: "$45",
            // Add image path here when you have real images
            image: "images/products/sarong.jpg"
        },
        {
            id: 2,
            name: {
                en: "Batik Shirt",
                id: "Kemeja Batik"
            },
            description: {
                en: "Modern batik shirt perfect for formal occasions",
                id: "Kemeja batik modern cocok untuk acara formal"
            },
            price: "$65",
            image: "images/products/shirt.jpg"
        },
        {
            id: 3,
            name: {
                en: "Batik Dress",
                id: "Dress Batik"
            },
            description: {
                en: "Elegant batik dress with contemporary design",
                id: "Dress batik elegan dengan desain kontemporer"
            },
            price: "$80",
            image: "images/products/dress.jpg"
        },
        {
            id: 4,
            name: {
                en: "Batik Scarf",
                id: "Selendang Batik"
            },
            description: {
                en: "Delicate silk batik scarf for any occasion",
                id: "Selendang sutra batik halus untuk segala acara"
            },
            price: "$35",
            image: "images/products/scarf.jpg"
        },
        {
            id: 5,
            name: {
                en: "Batik Tablecloth",
                id: "Taplak Meja Batik"
            },
            description: {
                en: "Beautiful batik tablecloth for your dining room",
                id: "Taplak meja batik cantik untuk ruang makan"
            },
            price: "$55",
            image: "images/products/tablecloth.jpg"
        },
        // {
        //     id: 6,
        //     name: {
        //         en: "Batik Wall Art",
        //         id: "Hiasan Dinding Batik"
        //     },
        //     description: {
        //         en: "Framed batik artwork perfect for home decoration",
        //         id: "Karya seni batik bingkai untuk dekorasi rumah"
        //     },
        //     price: "$120",
        //     image: "images/products/wallart.jpg"
        // }
    ],
    
    // Website Images - Change these paths to your actual images
    images: {
        hero: "images/hero-batik.jpg",
        about: "images/about-batik-workshop.jpg",
        logo: "images/logo.png"
    },
    
    // Social Media Links
    social: {
        instagram: "https://instagram.com/heritage.batik",
        facebook: "https://facebook.com/heritage.batik",
        whatsapp: "https://wa.me/6281234567890"
    },
    
    // Translations
    translations: {
        en: {
            "logo": "Heritage Batik",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-products": "Products",
            "nav-contact": "Contact",
            "hero-title": "Authentic Indonesian Batik",
            "hero-subtitle": "Discover the beauty of traditional handcrafted batik art, passed down through generations",
            "hero-cta": "Explore Collection",
            "about-title": "Our Heritage",
            "about-text": "For over three decades, our family has been creating authentic Indonesian batik using traditional techniques passed down through generations. Each piece tells a story of Indonesian culture, crafted with love and dedication by skilled artisans in our workshop.",
            "about-text2": "We are proud to share this beautiful art form with the world, bringing you genuine batik that represents the rich cultural heritage of Indonesia.",
            "products-title": "Our Collection",
            "contact-title": "Get in Touch",
            "contact-subtitle": "Ready to own a piece of Indonesian heritage? Contact us for custom orders or inquiries.",
            "contact-location-title": "Location",
            "contact-location": "Cirebon, Indonesia",
            "form-name": "Name",
            "form-email": "Email",
            "form-message": "Message",
            "form-submit": "Send Message",
            "footer": "© 2024 Batik Wikarsa. All rights reserved. Made with love in Indonesia."
        },
        id: {
            "logo": "Heritage Batik",
            "nav-home": "Beranda",
            "nav-about": "Tentang",
            "nav-products": "Produk",
            "nav-contact": "Kontak",
            "hero-title": "Batik Asli Indonesia",
            "hero-subtitle": "Temukan keindahan seni batik tradisional buatan tangan yang diwariskan turun temurun",
            "hero-cta": "Jelajahi Koleksi",
            "about-title": "Warisan Kami",
            "about-text": "Selama lebih dari tiga dekade, keluarga kami telah menciptakan batik Indonesia asli menggunakan teknik tradisional yang diwariskan turun temurun. Setiap karya menceritakan kisah budaya Indonesia, dibuat dengan cinta dan dedikasi oleh pengrajin terampil di bengkel kami.",
            "about-text2": "Kami bangga dapat berbagi bentuk seni yang indah ini dengan dunia, menghadirkan batik asli yang mewakili warisan budaya Indonesia yang kaya.",
            "products-title": "Koleksi Kami",
            "contact-title": "Hubungi Kami",
            "contact-subtitle": "Siap memiliki bagian dari warisan Indonesia? Hubungi kami untuk pesanan khusus atau pertanyaan.",
            "contact-location-title": "Lokasi",
            "contact-location": "Cirebon, Indonesia",
            "form-name": "Nama",
            "form-email": "Email",
            "form-message": "Pesan",
            "form-submit": "Kirim Pesan",
            "footer": "© 2024 Batik Wikarsa. Hak cipta dilindungi. Dibuat dengan cinta di Indonesia."
        }
    }
};