npm install tailwindcss @tailwindcss/vite redux react-redux @reduxjs/toolkit axios react-toastify lucide-react framer-motion dayjs react-router-dom react-scroll @emailjs/browser


cd assets && ls && cd .. && cd components/ && ls && cd .. && cd features/ && ls && cd .. && cd pages && ls && cd .. && cd routes/ && ls && cd ..

# for setting emailjs
visit & create account here - [EmailJsAccountCreate - Here](https://www.emailjs.com/)
- [Dashboard](https://dashboard.emailjs.com/admin)

- remember to copy - account service code, template code, public key

change template content to this - 

subject to this - Contact Us: {{name}}

--- 

You have received a new message from {{name}}.

Reply to: {{email}}

Message:
{{message}}

---