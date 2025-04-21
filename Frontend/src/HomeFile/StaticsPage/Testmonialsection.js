import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ravi M.",
    time: "One year with us",
    image: "https://img.freepik.com/premium-photo/portrait-smiling-man-standing-beach-sunset_1048944-5354943.jpg?uid=R180299756&ga=GA1.1.815902557.1738949051&semt=ais_hybrid&w=740",
    text: "AdToFuture gave me an easy way to make extra income online without needing any technical skills.",
  },
  {
    name: "Neha S.",
    time: "One year with us",
    image: "https://img.freepik.com/premium-photo/portrait-smiling-young-woman-against-white-background_1048944-24191161.jpg?uid=R180299756&ga=GA1.1.815902557.1738949051&semt=ais_hybrid&w=740",
    text: "I was surprised how quickly I started earning daily — the process is simple and truly works!",
  },
  {
    name: "Imran A.",
    time: "One year with us",
    image: "https://img.freepik.com/premium-photo/young-handsome-indian-man-with-arms-crossed_251136-20602.jpg?uid=R180299756&ga=GA1.1.815902557.1738949051&semt=ais_hybrid&w=740",
    text: "Thanks to the referral system, I now earn even more just by inviting my friends to join.",
  },
  {
    name: "Sneha K.",
    time: "One year with us",
    image: "https://img.freepik.com/premium-photo/portrait-smiling-young-woman-against-white-background_1048944-24191161.jpg?uid=R180299756&ga=GA1.1.815902557.1738949051&semt=ais_hybrid&w=740",
    text: "Withdrawals are quick and the platform is very transparent with no hidden charges or delays.",
  },
  {
    name: "Rahul T.",
    time: "One year with us",
    image: "https://img.freepik.com/premium-photo/man-blue-sweater-stands-front-fence_846457-317.jpg?uid=R180299756&ga=GA1.1.815902557.1738949051&semt=ais_hybrid&w=740",
    text: "I joined AdToFuture with just $50, and it’s amazing how consistently I’ve been earning since then.",
  },
  {
    name: "Anjali D.  ",
    time: "One year with us",
    image: "https://img.freepik.com/premium-photo/portrait-smiling-young-woman-against-black-background_1048944-18081318.jpg?uid=R180299756&ga=GA1.1.815902557.1738949051&semt=ais_hybrid&w=740",
    text: " The support team is helpful, the dashboard is clean, and everything just works smoothly.",
  },
];


export const Testmonialsection = () => {
  return (
    <>
    

    <section className="bg-gray-100 py-5 border-t-2">
      <div className="max-w-7xl mx-auto p-4">
        <p className="text-red-500 text-sm font-semibold mb-2">Testimonial</p>
        <h2 className="text-4xl font-bold mb-10">
        What Our Users Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        //   pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between  my-5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.time}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex justify-end">
                  <Quote className="text-purple-600 w-8 h-8" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  

    
    </>
  )
}
