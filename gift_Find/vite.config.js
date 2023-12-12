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
          'Authorization': 'Bearer v^1.1#i^1#I^3#r^0#p^1#f^0#t^H4sIAAAAAAAAAOVYb2wURRS/6x9ILYUgppAG4VxqVGD3dvf+r70zR6+1B7RXuetBG6GZ3Z29rne3e+7M0R4kWmsAkdCqhKISA2LERGJs9BMBCQpYYwzRD4IhkT/CB/1ASICICBJ3r0e5VgLYXuIl3pfLvHnz5v1+772Zt0P3TqlYuLFp47Uq89SS3b10b4nZzFTSFVPKF00vLakpN9F5CubdvbW9ZX2lv9YhkEykuBUQpVQFQUtPMqEgLiv0EmlN4VSAZMQpIAkRhwUu7G9ezrEUzaU0FauCmiAswYCX8Ai8S+B5KNlEmnbQrC5VbtuMqF5CYCW7A9qhBBwu1mVz6/MIpWFQQRgo2EuwNGsjGZZkmAhr42wezuGmnLSrg7BEoYZkVdFVKJrwZd3lsmu1PF/v7SpACGpYN0L4gv7GcMgfDDS0ROqsebZ8OR7CGOA0GjuqV0VoiYJEGt57G5TV5sJpQYAIEVbfyA5jjXL+285MwP0s1W4R8rRNJ9Pllpyix1UQKhtVLQnwvf0wJLJISllVDipYxpn7Maqzwb8ABZwbtegmggGL8fdcGiRkSYaal2hY4m/3t7YSvuZ0F0gmgUiGIdCErgaFbF0RIGk373IBxsaQogjcbijB3EYj1nI0j9upXlVE2SANWVpUvATqXsPx3LB53OhKISWk+SVseDSqx0ZoZpRDW4cR1JEopnGXYsQVJnUiLNnh/SMwuhpjTebTGI5aGD+RpchLgFRKFonxk9lczKVPD/ISXRinOKu1u7ub6rZRqhazsjTNWFc1Lw8LXTAJCF3XqPURffn+C0g5C0WA+kokcziT0n3p0XNVd0CJET6728HQrhzvY93yjZf+Q5CH2Tq2IgpVIU47KzgA63BKTtbD84UoEF8uR62GG5AHGTIJtDjEqQQQICnoaZZOQk0WOZtDYm1uCZKi0yORdo8kkbxDdJKMBCENIc8LHvf/qU4eNNPDUNAgLkiqFyzN26KO1pWu2NJQEDzbYQ9D5cXMUhAPtLuizYHosragnW5HIXeaWRb3ex+0GO4Kvj4h68xE9P2Lr9abVIShOCl4YUFNwVY1IQuZ4gqwTRNbgYYzYZhI6IJJgfSnUsHCHNUFg/cvj4mJ4S7cFfUfXU93RYWMlC0uVMZ6pBsAKZkybiBKUJNW1ah1oHcfhrgz6/WkcMt641pUqHWQI2hlcaTjpFQDLoXWCpQGkZrW9GabChkNWESNQ0W/z7CmJhJQizKTrudkMo0Bn4DFVtgFSHAZFNlly7j0XsLm8oy2RxPDJWSv0s5iO5IKchSXNU6sq7aO/cb3mbI/ps/8Fd1nPlRiNtN19OPMAvqxKaVtZaXTapCMISUDiUJyTNE/XTVIxWEmBWStZJbp8p7tTfU1DaHBhesjme93Dpum5T0x7F5Nzxl9ZKgoZSrzXhzouXdmypkZs6tYG8MyjB50j8PdQS+4M1vGVJc9cmlg3eVfthE3Zptu7jj6ef2VR9fvO0ZXjSqZzeWmsj6zaf7VnYMz3uhv/vmbyrVB6Fu813LiRv8z7758eNfqp7746OPjtQ8taTvVf/7hSvfZi4J644OKBdu2dZHKRXZm//Lp+OD+avgZerJx3472NUPHT/+18uDhrZX42PB7Gz+sY2Pk2Za2M17m+W9fWVf9VtOFk5vfPLj1cvyJ/lRsS8+ZA57wuuENQmz/5hMvVV2XW17te33mmqfP9e/a/7UjXhI4sPiPwO+1q6nFa75ztg9dm37zSO+iVbVLO3/bdKxzeM6nV+TDfbM2vWPavmdgYANTfTP2Z9Xe19bzc4ZO3/KfOzLz0CB8eyg+P3F03pebhO0nrzdHr15y1oi33v/pwmDcO/X8lnmnhj75oe3H4NyRWP4N23/09PwRAAA=', // Move your eBay API Key here
          'Content-Type': 'application/json',
        },
      },
    },
  },
});
