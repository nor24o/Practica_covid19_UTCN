 %[filename, filepath] = uigetfile( 'C:\Users\horva\Desktop\Practica\Practica_covid19_UTCN\Database\Norbert\Cazuri.xlsx' ) ;
% date de pe https://covid19.geo-spatial.org/
 Cazuri = xlsread( 'C:\Users\horva\Desktop\Practica\Practica_covid19_UTCN\Database\Norbert\Cazuri.xlsx' ) ;

t=Cazuri(:,1);
cazuri_totale=Cazuri(:,2);
cazuri_active=Cazuri(:,3);
decese=Cazuri(:,4);
vindecati=Cazuri(:,5);

nr_teste=Cazuri(:,6);
cazuri_unice=Cazuri(:,7);

rata_de_crestere=Cazuri(:,8);

frecventa_pe_grupe_varste=Cazuri(:,9);
frecventa_pe_grupe_frecventa=Cazuri(:,10);

nr_de_reproductie_virus_R=Cazuri(:,11);
nr_de_reproductie_virus_R25=Cazuri(:,12);
nr_de_reproductie_virus_R75=Cazuri(:,13);
nr_de_reproductie_virus_R05=Cazuri(:,14);
nr_de_reproductie_virus_R95=Cazuri(:,15);
nr_de_reproductie_virus_R025=Cazuri(:,16);
nr_de_reproductie_virus_R975=Cazuri(:,17);


% date de pe worldomeres 

AU_HU_IS = xlsread( 'C:\Users\horva\Desktop\Practica\Practica_covid19_UTCN\Database\Norbert\Australia_Ungaria_Israel_worldometer.xlsx' ) ;
 
data_zile=AU_HU_IS(:,1);

%Israel
cazuri_totale_Israel=AU_HU_IS(:,2);
cazuri_noi_pe_zi_Israel=AU_HU_IS(:,3);
cazuri_active_Israel=AU_HU_IS(:,4);
decese_Israel=AU_HU_IS(:,5);
decese_pe_zi_Israel=AU_HU_IS(:,6);

%Ungaria
cazuri_totale_Ungaria=AU_HU_IS(:,7);
cazuri_noi_pe_zi_Ungaria=AU_HU_IS(:,8);
cazuri_active_Ungaria=AU_HU_IS(:,9);
decese_Ungaria=AU_HU_IS(:,10);
decese_pe_zi_Ungaria=AU_HU_IS(:,11);

%Austria
cazuri_totale_Austria=AU_HU_IS(:,12);
cazuri_noi_pe_zi_Austria=AU_HU_IS(:,13);
cazuri_active_Austria=AU_HU_IS(:,14);
decese_Austria=AU_HU_IS(:,15);
decese_pe_zi_Austria=AU_HU_IS(:,16);