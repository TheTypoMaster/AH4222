MENU_DEVICE_INFO             =  0
MENU_DEVICE_SUMMARY          =  1
MENU_DEVICE_WAN              =  2
MENU_STATISTICS              =  3
MENU_ST_LAN                  =  4
MENU_ST_ATM                  =  5
MENU_ST_ADSL                 =  6
MENU_DEVICE_ROUTE            =  7
MENU_RT_ARP                  =  8
MENU_QUICK_SETUP             =  9
MENU_ADVANCED_SETUP          = 10
MENU_DSL                     = 11
MENU_WAN                     = 12
MENU_LAN                     = 13
MENU_SC_NAT                  = 14
MENU_SC_VIRTUAL_SERVER       = 15
MENU_SC_PORT_TRIGGER         = 16
MENU_SC_DMZ_HOST             = 17
MENU_SC_SECURITY             = 18
MENU_SC_IP_FILTER            = 19
MENU_SC_INCOMING             = 20
MENU_SC_OUTGOING             = 21
MENU_MAC_FILTER              = 22
MENU_QOS_CLASS               = 23
MENU_ROUTING                 = 24
MENU_RT_STATIC_ROUTE         = 25
MENU_RT_RIP                  = 26
MENU_RT_DEFAULT_ROUTE        = 27
MENU_DNS                     = 28
MENU_DIAGNOSTICS             = 29
MENU_MANAGEMENT              = 30
MENU_TL_SYSTEM_LOG           = 31
MENU_TL_SNMP                 = 32
MENU_TL_UPDATE_SOFTWARE      = 33
MENU_TL_SETTINGS             = 34
MENU_TL_SETTINGS_BACKUP      = 35
MENU_TL_SETTINGS_UPDATE      = 36
MENU_TL_SETTINGS_DEFAULT     = 37
MENU_WIRELESS_SETTINGS       = 38
MENU_WL_BASIC                = 39
MENU_WL_SECURITY             = 40
MENU_WL_MAC_FILTERING        = 41
MENU_WL_WDS                  = 42
MENU_WL_ADVANCED             = 43
MENU_VOICE_SETTINGS          = 44
MENU_VOICE_MGCP              = 45
MENU_VOICE_SIP               = 46
MENU_VOICE_STATS             = 47
MENU_RESET_ROUTER            = 48
MENU_ACC_CNTR                = 49
MENU_ACC_CNTR_IP_ADDR        = 50
MENU_ACC_CNTR_SERVICE        = 51
MENU_ACC_CNTR_PASSWORD       = 52
MENU_DNS_SETUP               = 53
MENU_DDNS                    = 54
MENU_SNTP                    = 55
MENU_TOD                     = 56
MENU_WL_STATION_LIST         = 57
MENU_SIPROXD                 = 58
MENU_DHCPINFO                = 59
MENU_PORTMAP                 = 60
MENU_IPP                     = 61

var menuTitle = new Array();
menuTitle[MENU_DEVICE_INFO]                           = 'Informations Modem';//'Device Info';
menuTitle[MENU_DEVICE_SUMMARY]                        = 'R�sum� ';//'Summary';
menuTitle[MENU_DEVICE_WAN]                            = 'R�seau Distant (WAN)';//'WAN';
menuTitle[MENU_STATISTICS]                            = 'Statistiques';//'Statistics';
menuTitle[MENU_ST_LAN]                                = 'R�seau Local (LAN)';//'LAN';
menuTitle[MENU_ST_ATM]                                = 'ATM';
menuTitle[MENU_ST_ADSL]                               = 'ADSL';
menuTitle[MENU_DEVICE_ROUTE]                          = 'Routage';//'Route';
menuTitle[MENU_RT_ARP]                                = 'ARP';
menuTitle[MENU_QUICK_SETUP]                           = 'Quick Setup';
menuTitle[MENU_ADVANCED_SETUP]                        = 'Configuration Avanc�e';//'Advanced Setup';
menuTitle[MENU_DSL]                                   = 'DSL';
menuTitle[MENU_WAN]                                   = 'R�seau Distant (WAN)';//'WAN';
menuTitle[MENU_LAN]                                   = 'R�seau Local (LAN)';//'LAN';
menuTitle[MENU_SC_NAT]                                = 'NAT';
menuTitle[MENU_SC_VIRTUAL_SERVER]                     = 'Serveurs Virtuels';//'Virtual Servers';
menuTitle[MENU_SC_PORT_TRIGGER]                       = 'Port Triggering';//'Port Triggering';
menuTitle[MENU_SC_DMZ_HOST]                           = 'SERVEUR DMZ';//'DMZ Host';
menuTitle[MENU_SC_SECURITY]                           = 'Securite';//'Security';
menuTitle[MENU_SC_IP_FILTER]                          = 'IP Filtering';
menuTitle[MENU_SC_INCOMING]                           = 'Incoming';
menuTitle[MENU_SC_OUTGOING]                           = 'Outgoing';
menuTitle[MENU_MAC_FILTER]                            = 'Filtrage par adresse MAC';//'MAC Filtering';
menuTitle[MENU_QOS_CLASS]                             = 'Qualit� de service';//'Quality of Service';
menuTitle[MENU_ROUTING]                               = 'Routage';//'Routing';
menuTitle[MENU_RT_STATIC_ROUTE]                       = 'Routage Statique';//'Static Route';
menuTitle[MENU_RT_RIP]                                = 'RIP';
menuTitle[MENU_RT_DEFAULT_ROUTE]                      = 'Passerelle Par Defaut';//'Default Gateway';
menuTitle[MENU_DNS]                                   = 'Serveur DNS';//'DNS';
menuTitle[MENU_DIAGNOSTICS]                           = 'Diagnostics';
menuTitle[MENU_MANAGEMENT]                            = 'Gestion Interface';//'Management';
menuTitle[MENU_TL_SYSTEM_LOG]                         = 'Journal syst�me';//'System Log';
menuTitle[MENU_TL_SNMP]                               = 'SNMP Agent';
menuTitle[MENU_TL_UPDATE_SOFTWARE]                    = 'Mettre � jour le Firmware';//'Update Software';
menuTitle[MENU_TL_SETTINGS]                           = 'Param�tres';//'Settings';
menuTitle[MENU_TL_SETTINGS_BACKUP]                    = 'Archiver';//'Backup';
menuTitle[MENU_TL_SETTINGS_UPDATE]                    = 'Restaurer';//'Update';
menuTitle[MENU_TL_SETTINGS_DEFAULT]                   = 'Param�tres par d�faut';//'Restore Default';
menuTitle[MENU_WIRELESS_SETTINGS]                     = 'Reseau Sans Fil';//'Wireless';
menuTitle[MENU_WL_BASIC]                              = 'Param�tres de base';//'Basic';
menuTitle[MENU_WL_SECURITY]                           = 'S�curit� ';//'Security';
menuTitle[MENU_WL_MAC_FILTERING]                      = 'Filtrage par adresse MAC';//'MAC Filter';
menuTitle[MENU_WL_WDS]                                = 'Pont sans fil';//'Wireless Bridge';
menuTitle[MENU_WL_ADVANCED]                           = 'Param�tres�Avanc�s';//'Advanced';
menuTitle[MENU_VOICE_SETTINGS]                        = 'Voix';//'Voice';
menuTitle[MENU_VOICE_MGCP]                            = 'MGCP';
menuTitle[MENU_VOICE_SIP]                             = 'SIP';
menuTitle[MENU_VOICE_STATS]                           = 'Statistiques';//'Statistics';
menuTitle[MENU_RESET_ROUTER]                          = 'Sauver/Red�marrer';//'Save/Reboot';
menuTitle[MENU_ACC_CNTR]                              = "Contr�le d'acc�s";//'Access Control';
menuTitle[MENU_ACC_CNTR_IP_ADDR]                      = 'Adresse IP';//'IP Addresses';
menuTitle[MENU_ACC_CNTR_SERVICE]                      = 'Services';
menuTitle[MENU_ACC_CNTR_PASSWORD]                     = 'Mot de passe';//'Passwords';
menuTitle[MENU_DNS_SETUP]                             = 'Serveur DNS';//'DNS Server';
menuTitle[MENU_DDNS]                                  = 'Dynamic DNS';
menuTitle[MENU_SNTP]                                  = 'Heure Internet';//'Internet Time';
menuTitle[MENU_TOD]                                   = 'Parental Control';
menuTitle[MENU_WL_STATION_LIST]                       = 'Etat de la borne';//'Station Info'
menuTitle[MENU_SIPROXD]                               = 'SIP ALG';
menuTitle[MENU_DHCPINFO]                              = 'DHCP';
menuTitle[MENU_PORTMAP]                               = 'Port Mapping';
menuTitle[MENU_IPP]                                   = 'Print Server';

function getMenuTitle(index) {
   return menuTitle[index];
}
