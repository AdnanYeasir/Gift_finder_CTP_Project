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
          'Authorization': 'Bearer v^1.1#i^1#I^3#p^1#r^0#f^0#t^H4sIAAAAAAAAAOVYbWwURRi+u35AgeIPCGoBPbf4EXD3Zveuvb2FXjj6ef3gCteetgmBud25dunt7rkzZ7lYY2koxEiUpIIYAjSYQCKaSFSIRoGUryiJolETQ+QPP0AtRiURRCPO3pVyrQSQXmIT989m33nnned55n1nZgf0FhYt3Fi38UqxfYpjsBf0Oux2fjooKixYNDPPUVJgA1kO9sHeBb35fXkXl2CoxRPSSoQTho6Rc50W17GUNlYwSVOXDIhVLOlQQ1gishQONDVKAgekhGkQQzbijDNYVcH45HKPqCgi9JS5xXIUpVb9RswWo4KB0SjvK1d8AlJ8vCiLtB3jJArqmECdVDACENwsL7C8u4Uvl9y8JHg4L/C2M84IMrFq6NSFA4w/DVdK9zWzsN4eKsQYmYQGYfzBQE04FAhWVS9vWeLKiuUf0SFMIEnisV+VhoKcERhPotsPg9PeUjgpywhjxuXPjDA2qBS4AeYe4GekBlG53BfzegCUZbksmhMpawxTg+T2OCyLqrCxtKuEdKKS1J0UpWpE1yKZjHwtpyGCVU7rtSIJ42pMRWYFU70s0BZobmb8TclOqGlQYcMImnJntc42r6xigRj1eiHv5llFgaKIYmhkoEy0EZnHjVRp6IpqiYadyw2yDFHUaLw2QpY21Cmkh8xAjFiIsv3EUQ097dakZmYxSTp1a16RRoVwpj/vPAOjvQkx1WiSoNEI4xvSEtGySSRUhRnfmM7FkfRZhyuYTkISksvV3d3Ndbs5w+xwCQDwrqebGsNyJ9IgQ32tWs/4q3fuwKppKjKiPbEqkVSCYllHc5UC0DsYv0cs44F3RPexsPzjrf8wZHF2ja2IXFWIyEMBiYoIAPBBnxvmokL8I0nqsnCgKEyxGjS7EEnEoYxYmeZZUkOmqkjuspjgFmOIVWiRsh5fLMZGy5Rylo8hBBCKRmWf+H8qlLtN9TCSTURykus5y/PWSFnzU96O+lAQ1rZ7wkh/JlUPu6ravJGmqkhDa9AD2nBITPINXYGKu62GW5KvjKtUmRY6fi4EsGo9dyLUGZggZUL0wrKRQM1GXJVTk2uC3abSDE2SCqN4nBomRDKQSARzs1bnjN6/XCbujXfu9qj/aH+6JStspezkYmX1xzQATKictQNxsqG5rFo3ID1+WObVadQT4q3Sk+ukYk1JZtiqSubIyaXpcvhZmTMRNpImPW1zIesE1mJ0IZ3uZ8Q04nFkRvgJ17OmJQmMxtFkK+wcJLgKJ9lmy3uBQHkB0TMhXnJ6K1092ZakXCzF+bX3eKx2jf3J99vSD99nHwJ99sMOux0sAY/ypeCRwrzW/LwZJVgliFNhjMNqh07/XU3EdaFUAqqmY5bt1z1b6ypLqkPbFj7Xkjqz45RtRtYdw+Aq8MDoLUNRHj8968oBzLvZUsDfd3+x4OYFyr2cvjztoPRmaz4/J3/2yeYvhtfs0lbVpQ4nHKELS8nBgjmgeNTJbi+w5ffZbeEDaMMKpqhebP2M7J+7t5+dN/fB9wff2Hd+Ws+BKYJy3LHH1nP20OaDu4fOX39tfQ/5c6q46NuTsy8WDfT8Vdiwd8Pm6MpXzOH+HUulTQ2RtV/+uOt0/4I1bQuuXBhy7Dx3duas7x7TrwV+nrml+tP9Q/Nri1y+6Vv1og/O+Y4WFlw7wr73ztRLGjmyvdSJD/3xcR1bwr708ONG3Vevpn4ilzYtvny95K3Oq7XX8LQtA+yx6tKa38UXjJr64cGjjd/UNG4uDn3dsvf1jzacePvNSy9+3rDt3W0vrz8x98knavftdvTMv8yvddgXb39oz4AN79y32vNh//OnjnVxp8/UCJ8s/M1+/IfBq8Pf/5KZy78BTILmRf0RAAA=', // Move your eBay API Key here
          'Content-Type': 'application/json',
        },
      },
    },
  },
});
