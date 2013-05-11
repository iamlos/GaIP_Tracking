<script src="http://j.maxmind.com/app/geoip.js" charset="ISO-8859-1" type="text/javascript"></script>
<script>
var maxcountry=geoip_country_name(),maxcity=geoip_city(),maxregion=geoip_region(),maxregionname=geoip_region_name(),maxiplatitude=geoip_latitude(),maxiplongitude=geoip_longitude();
_gaq.push(["_trackEvent","Geo Data 2","Max IP Country Data","Country: "+maxcountry+" Region data: "+maxcity+" // "+maxregion+" / "+maxregionname]);
_gaq.push(["_trackEvent","Geo Data 2","Max IP Country Geo","Country: "+maxcountry+" Latitude: "+maxiplatitude+" Longitude: "+maxiplongitude]);

</script>
