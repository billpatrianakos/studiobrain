# StudioBrain

> A master server and slave scripts for monitoring, reporting, and controlling the climate of heat/cooling systems remotely using Raspberry Pi

The purpose of this project is to collect all of the components necessary to control the climate of my own recording studio using 3 Raspberry Pi's. One each for turning on/off a heater or A/C unit and one more that collects climate data in the studio and sends data back to the client that needs to turn an appliance (heater of air conditioner) on or off.

The idea is that the main RasPi will collect the climate data in the room and run a Node.js server that allows one to view the current and historical climate data as well as override heating and cooling functions at will. The other two Pi's will be connected to an IoT power strip and run cron jobs that will then reach out to the server and ask whether they need to turn on or off.

All three Raspberry Pi's would ideally be connected to the web via a private VPN. So you will need a VPS to get a VPN running and then connect all your Pi's to it. Alternatively you can always use this over your local network.

With all that out of the way, now you know why this exists and if it would help you. Currently any solution to controlling electric heaters and A/C units is either non-existant or quite expensive. This solution solves a niche problem of having a room (in this case one above my garage that has an electric heater and window AC unit) that needs to stay within a certain temperature and humidity range so as not to harm my very expensive collection of guitars.

## Installation

*Note: Step 1 should be changed to accomodate how you want to deploy this to your Pi. You have the option of cloning the project directly to each Pi and starting them manually or you can clone the project to your dev machine and deploy to each Pi using PM2. PM2 deploy is recommended. Makes for easier updates and process management although it's a bit more work to set up initially*

On your server and client Raspberry Pi units...

1. Clone the project to your dev machine, install nvm and install the Node version called for in the `.nvmrc` file
2. Install all dev machine dependencies with `npm install -g knex pm2`
3. At this point you may want to create a branch for each Pi you'll be using this on. You're about to change configuration files which will differ per machine
4. Update __`CONFIG FILES TBD`__ (a PR with a script that prompts you for the config settings and writes them to appropriate files would be cool)
5. Install Nginx on the server unit. Client nodes will only be calling out to the server so no need for Nginx or Apache here. Set all units up to send and receive data over HTTP in some way. They'll all need to call out to port 80 or 443 on a server. Configure your firewall as needed per Pi.
6. Connect all units to a VPN if you want to be able to access this from outside your home network (advised). Tinc is simple and secure.
7. Repeat step 2 on each Raspberry Pi using the same Node version running on your dev machine
8. To be continued...