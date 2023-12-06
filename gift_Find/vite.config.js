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
          'Authorization': 'Bearer v^1.1#i^1#p^1#r^0#I^3#f^0#t^H4sIAAAAAAAAAOVYbWwURRju9QNSoCpQARtSzm0B+bi9mb3vtXfm7LX0KO3V3rVKAzZzu3Pt2tvdc2fX9gRDUxMsREIIAX6g0JCIKURFEiSRyFci8oMYYoSYGIkREzSaGAhCDYS6uz3KtRJAeolNvD+Xeeedd57nmfedmR3QO6V46ca6jTdLLFPzB3pBb77FAqeD4ilFy54oyC8rygNZDpaB3srewr6CX6oIEpMpthmTlCwRbO0RkxJhTaOf0hSJlRERCCshERNW5dhosGEVy9CATSmyKnNykrKGQ36KSzg8yO1wACfvgZhP6FbpbsyY7Kfc0Ml5cRxxyMUA3u3U+wnRcFgiKpJUP8UAxmGDjA24YwxkXZB1Atrt87ZR1lasEEGWdBcaUAETLmuOVbKwPhgqIgQrqh6ECoSDtdFIMByqaYxV2bNiBTI6RFWkamRsq1rmsbUVJTX84GmI6c1GNY7DhFD2wMgMY4OywbtgHgO+KTWEbifGDpfb64Y+gHKiZK2siEh9MAzDIvC2hOnKYkkV1PTDBNXFiL+GOTXTatRDhENW4+8lDSWFhIAVP1XzYnB1sKmJCjRonUgUEW+LYqRwnTWSrak5ZAPeuMeDoAPaeB55vTiBMxONRMuoPG6malniBUMzYm2U1RexjhqP18aZpY3uFJEiSjChGoiy/RyjGjrbjDUdWURN7ZSMZcWiLoTVbD58BUZHq6oixDUVj0YY32FK5KdQKiXw1PhOMxUz2dND/FSnqqZYu727u5vudtCy0mFnAID2VxpWRblOLOoZovsatW76Cw8fYBNMKhzWRxKBVdMpHUuPnqo6AKmDCji9Lgg8Gd3HwgqMt/7DkMXZPrYgclUgjEMH6AUQcXEX4CGXiwoJZJLUbuDQ97G0TURKF1ZTScRhG6fnmSZiReBZhyvBOLwJbOPdvoTN6UskbHEX77bBBMYA43ic83n/T4XyqKkexZyC1dzkeq7yvKXV1fSyp2NlJIxWtDmjWHo9vRJ1hVZ7WhtCrfUtYSdYTSJeDdZ3Bf2PWg33JV+dFHRlYvr8ORHAqPWciVAnExXzE6IX5eQUbpKTApeeXAvsUPgmpKjpKE4mdcOESAZTqXCO9upc0fuX28Tj8c7hGfXfnE/3ZUWMlJ1crIzxRA+AUgJtnEA0J4t22ah1pF8/DHO7iXpCvAX94jqpWOskR9gK/MiVk5YNujR5g6MVTGRN0S/bdMS4gcXkLizp55mqyMkkVlrhhOtZFDUVxZN4shV2DhJcQJPssIUeAL0+nwuACfHizKO0fbJtSTnZigtrH+9abR/7jR/IM3+wz3Ia9FmO51ssoAoshBXg2SkFLYUFM8qIoGJaQAmaCB2S/umqYLoLp1NIUPJn513bt6OuuqwmsnPpulj6/O6v8mZkPTEMrAXzRh8Zigvg9KwXBzD/Xk8RfHJuCeOADHAz0AWdoA1U3OsthHMKS4c+H1pydMvlU3sWXbSeOvSD9c+dh78GJaNOFktRXmGfJW/RF+0bQi3xm0Wlh+eWDpK/Khb1r7u899Wftv/a2P/Oydhw+ebbzT4/rlq/89w3lWeKu08sZmfvO6Q22ndUnBdqoyUzmc0e+ZM9g4cPXt3fXz+/+oVlfzDc9+XPcweK5w0cuwbs29Yu3L3gxoHl02aFFwwvX7NqWmTW5vYjl8LH3r9TvmXD0IC2tehTN3e2rGvqlcrKurZda1accO7/THxqTv8tZe+tL3+u3r5r+PzyrTPPXq1Ye7An+tuKt3a9/dzwmzc2DdHbGqoGK7+7Prf+yoEL1/MXtBSXfvjByW+XPF3e/Mz2cxffdZ5ZDC98/PsSdtOOS9NvH+1df+fWBdfxj+YP1stJ8ceb1vbT0feOjKzl330CqXT8EQAA', // Move your eBay API Key here
          'Content-Type': 'application/json',
        },
      },
    },
  },
});
