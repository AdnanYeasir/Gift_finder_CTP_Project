// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.ebay.com/buy/browse/v1/item_summary/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Authorization': 'Bearer v^1.1#i^1#r^0#f^0#p^1#I^3#t^H4sIAAAAAAAAAOVYXWwUVRTeabfQym+CCJS/dYqagLt7Z2Z/ZofuJksX6FLaLmy70qKBuzN3tmNnZ5a5s5YV0aZCFeUFY0yMqak0QXjRB0END2JqJAEjP5o+8EAAiT8JhqSigUglzswuZVsJIN3EJu7LZs4999zv++45954Z0D2lanlvfe/1GcTUsv5u0F1GENQ0UDWlYsXM8rLqChsociD6u5d123vKf6nFMC1nuI0IZ1QFI8f2tKxgzjIGyaymcCrEEuYUmEaY03kuHm5cz9EuwGU0VVd5VSYd0UiQFAOsKCYRxdL+AKBp0bAqt2O2qEESMUzSzwjAHxBFGGBYYxzjLIoqWIeKHiRpQDNOinYCXwvFcsDD0T4XoH3tpCOBNCypiuHiAmTIgstZc7UirPeGCjFGmm4EIUPR8Jp4czgaWd3UUusuihUq6BDXoZ7FY5/qVAE5ElDOonsvgy1vLp7leYQx6Q7lVxgblAvfBvMQ8C2pacHj9dJMIMl4Ah5e8JdEyjWqlob6vXGYFklwipYrhxRd0nP3U9RQI/k84vXCU5MRIhpxmH8bslCWRAlpQXL1qnBbOBYjQ43ZDphOQ8EZR1DjO1YrztjGiBOwSb8fUgzlFATIskhEhYXy0Qoyj1upTlUEyRQNO5pUfRUyUKOx2vg5b5E2hlOz0qyFRd1EVORHg1ENqXZzU/O7mNU7FHNfUdoQwmE93n8HRmfruiYlszoajTB+wJIoSMJMRhLI8YNWLhbSZzsOkh26nuHc7q6uLlcX41K1lJsGgHJvalwf5ztQGpKGr1nreX/p/hOckkWFR8ZMLHF6LmNg2W7kqgFASZEhD+ulgL+g+1hYofHWfxiKOLvHVkSpKsSHQBKKfg/jo70U74WlqJBQIUndJg6UhDlnGmqdSM/IkEdO3sizbBppksAxXpFmWBE5BV9AdHqM886Z9Ao+JyUiBBBKJvkA+38qlAdN9TjiNaSXJNdLluetCW/sGX9qXXMUrm33xJGyLbcOdkba/InGSKKhNeoBbbiZzVINneHgg1bDXcnXyZKhTIuxfikEMGu9dCLUq1hHwoToxXk1g2KqLPG5ybXBjCbEoKbn4kiWDcOESIYzmWhpzuqS0fuXx8TD8S7dHfUf3U93ZYXNlJ1crMz52AgAM5LLvIFcvJp2m7WuQqP9MM1bLNQT4i0ZneukYm2QzLOVhHzL6bLouvALvEtDWM1qRrftajY7sBa1EynGfaZrqiwjLUFNuJ7T6awOkzKabIVdggSX4CS7bCk/oFjWy/p8E+LFW1fplsl2JJXiKLavfci22j32JT9ks35UDzEIeogvyggC1IInqBrw+JTyVnv59Gos6cglQdGFpZRivLtqyNWJchkoaWVzbNfBz+/xv9YfeqPzVte2n1butBV/Y+h/Dswf/cpQVU5NK/rkABbdGamgZs2bQTMUDXwUCzxGZwlq7ozaqcfsj26ODJ+v/7LSvZdMDY+c+uA6nT0ZBDNGnQiiwmbvIWxNm44Jy/ZXD/EXf9w87Za/YfYx77d/nNuZ7p/a/lTdhb37lopH59ScvLJszudnLm8e3rjgt7rEkq2Vn/Frjt94CcTKzt58dqCy5TK7B/C499K1eTt2HN49/eraBdVtVV8HT8//cOG5oYGBlPJiX+XhbXvr31o8t6+y9cA7ipCDT390NUqcHpSXXnvb1rfj1YEL3L6AffeWEwuGViyKSos/OXKz/nd21xBxZK7cfmiQmffIyHdLTp9ve/lUz9ZU3cif6sLdX9Ww+1/3f/PKX2/m3g013Nha6xg+SziWf//khj0/nBj+9Bw6fmDwypH3+7pWDh6c+fGsyl0HDh69dGZp7+wecHTh2YvnHSeqKl7L7+XfahoBg/0RAAA=', // Move your eBay API Key here
          'Content-Type': 'application/json',
        },
      },
    },
  },
});
