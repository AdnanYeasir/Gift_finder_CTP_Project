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
          'Authorization': 'Bearer v^1.1#i^1#p^1#f^0#r^0#I^3#t^H4sIAAAAAAAAAOVYa2wUVRTubh/Q8FARQWsl66AYqTN7Z5+zQ3eTpdvHUtrddreLNBJyd+ZOO3R3Zpg7Q7uaklq0iopGkhKCiRaI0Uj0Bz+QBCXRogghER+J8kNCiT+aEJSIiBoMzuwuZVsJIN3EJu6fzZx77rnf951z7r0zYKCicvlQ09DleZZZ1pEBMGC1WOg5oLKivGZ+qbWqvAQUOFhGBh4ZKBssHa/FMJ1S2HaEFVnCyNaXTkmYzRr9hK5KrAyxiFkJphFmNY6NBVtWsw4KsIoqazInpwhbOOQnXC4PTLq8CDJOnnFDn2GVrsWMy37C4UM+H+KcvIdhaIeHM8Yx1lFYwhqUNGMcOJwk7SCBNw5oFrhY2ke5GKaTsCWQikVZMlwoQASycNnsXLUA682hQoyRqhlBiEA42BCLBMOh+tZ4rb0gViCvQ0yDmo4nP9XJPLIlYEpHN18GZ73ZmM5xCGPCHsitMDkoG7wG5g7g56QGjqTPQQs+2isgmvMURcoGWU1D7eY4TIvIk0LWlUWSJmqZWylqqJHcgDgt/9RqhAiHbOZfmw5ToiAi1U/UrwyuDUajRKBF74bpNOTJGIIq110vkdH2EAmYpNcLaSdN8jxkGCSg/EK5aHmZp6xUJ0u8aIqGba2ythIZqNFkbQDrLtDGcIpIETUoaCaiQj/nhIbuTjOpuSzqWrdk5hWlDSFs2cdbZ2BitqapYlLX0ESEqQNZifwEVBSRJ6YOZmsxXz592E90a5rC2u29vb1Ur5OS1S67AwDa/mTL6hjXjdKQMHzNXs/5i7eeQIpZKhwyZmKR1TKKgaXPqFUDgNRFBAwpaODN6z4ZVmCq9R+GAs72yR1RrA5JetwuXgAMgoDzuFx8MTokkC9Su4kDJWGGTEO1B2lKCnKI5Iw609NIFXnW6RYcTkZAJO/xCaTLJwhk0s17SFpACCCUTHI+5v/UKLdb6jHEqUgrSq0Xrc47Eu7oGm/XqkgYNna6YkjamFkFe0JrvYmWUKK5I+wCa3GE0enmnqD/drvhhuTrUqKhTNxYvxgCmL1ePBGaZKwhflr0YpysoKicErnMzEqwU+WjUNUyMZRKGYZpkQwqSrg4e3XR6P3LbeLOeBfvjPqPzqcbssJmyc4sVuZ8bASAikiZJxDFyWm72esyNK4fpnl9FvW0eIvGzXVGsTZI5tiKfO7KSWXpUngTR6kIy7pq3LapiHkDi8s9SDLOM02VUymkJuhp93M6rWswmUIzrbGLUOAinGGHLe0FtI+mgds3LV5c9ihdP9O2pGJsxWWNd3ittk9+yQ+UZH/0oOVTMGg5bLVYQC14lF4KHq4o7SgrnVuFRQ1RIhQoLHZJxruriqgelFGgqFrvLfllz3BTXVV9ZMfyZ+KZk28cLZlb8I1hZB24f+IrQ2UpPafgkwOovj5STt+1eJ7DSTuAkXXgon2dYOn10TJ6UdnCaOPYkYXcwR0/0lc2938c9p9WnwiAeRNOFkt5SdmgpWTJof6G5sVNS1vrmAPxkatfHVcbyy4c6h/fG/jjOXn3xfjQojfboieoy7O/OFASm89eekV/8MP3uRfCP+HqPdv9nPLAd8dX/RAZOrf17MZtY7uq25pxTVdl+1uHjjW8nfx8H//zss8OL/ng1Nc1VbOGXvpIOzN6dsM3Z5qsNYuo2cPVoX2Pty0/ldq2lfkrJMh9R22PzX5359H2BWPf3tPrcV38Pb39z53j4ZMrOqLv7N9Ye459uda37MR97z00+tvVPc+Sxz+5sOv8ltdef3VzePxF+JQePLYpYX2+Nqntr965ZU3F90L/iuHR0pojAyt2D1UoW+8+f1pdxy1x79/79ImDY79+uWDBMB69cimXy78BgKiw3P0RAAA=', // Move your eBay API Key here
          'Content-Type': 'application/json',
        },
      },
    },
  },
});
