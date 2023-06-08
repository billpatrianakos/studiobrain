# StudioBrain

> A master server and slave scripts for monitoring, reporting, and controlling the climate of heat/cooling systems remotely using Raspberry Pi

The purpose of this project is to collect all of the components necessary to control the climate of my own recording studio using 3 Raspberry Pi's. One each for turning on/off a heater or A/C unit and one more that collects climate data in the studio and sends data back to the client that needs to turn an appliance (heater of air conditioner) on or off.

The idea is that the main RasPi will collect the climate data in the room and run a Node.js server that allows one to view the current and historical climate data as well as override heating and cooling functions at will. The other two Pi's will be connected to an IoT power strip and run cron jobs that will then reach out to the server and ask whether they need to turn on or off.

All three Raspberry Pi's would ideally be connected to the web via a private VPN. So you will need a VPS to get a VPN running and then connect all your Pi's to it. Alternatively you can always use this over your local network.

With all that out of the way, now you know why this exists and if it would help you. Currently any solution to controlling electric heaters and A/C units is either non-existant or quite expensive. This solution solves a niche problem of having a room (in this case one above my garage that has an electric heater and window AC unit) that needs to stay within a certain temperature and humidity range so as not to harm my very expensive collection of guitars.

## Installation

On your server and client Raspberry Pi units...

1. Clone the project to each Pi you'll use this on and decide which will be the server and which the client(s)
2. Install Nginx on the server unit
3. Connect all units to a VPN if you want to be able to access this from outside your home network (advised)
4. Install the version of Node required (running `nvm use` in the project folder will tell you the command)
5. To be continued...