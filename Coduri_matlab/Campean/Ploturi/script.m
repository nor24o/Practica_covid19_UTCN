%director root 
path='C:\Users\horva\Desktop\Practica\Practica_covid19_UTCN\Coduri_matlab\Campean\Ploturi\';

% incarcare date pentru https://covid19.geo-spatial.org/
Cazuri = xlsread( strcat(path,'Cazuri.xlsx' )) ;
calitate_aer =  xlsread( strcat(path,'aerlive_data.xlsx' )) ;
AU_HU_IS = xlsread( strcat(path,'Australia_Ungaria_Israel_worldometer.xlsx' )) ;
Decese = xlsread( strcat(path,'Decese.xlsx' )) ;
Europa =  xlsread( strcat(path,'Europa.xlsx' )) ;
Frontiera =  xlsread( strcat(path,'Frontiera.xlsx' )) ;
teste = xlsread( strcat(path,'teste.xlsx' )) ;
Waze = xlsread( strcat(path,'Waze.xlsx' )) ;

%date de pe worldomeres 
elvetia2 = xlsread( strcat(path,'Elvetia.xlsx' )) ;
Franta = xlsread( strcat(path,'Franta.xlsx' )) ;
Germania = xlsread( strcat(path,'Germania.xlsx' )) ;

spania = xlsread( strcat(path,'Spania.xlsx' )) ;
italia = xlsread( strcat(path,'Italia.xlsx' )) ;
uk = xlsread( strcat(path,'uk.xlsx' )) ;

portugalia = xlsread( strcat(path,'Portugalia.xlsx' )) ;
usa = xlsread( strcat(path,'USA.xlsx' )) ;
%



%% Plot Frontiera cu date pentru https://covid19.geo-spatial.org/
%Romania
figure('Name','Frontiera')
t1=Frontiera(:,1);

a=Frontiera(:,2);

b=Frontiera(:,3);

c=Frontiera(:,4);

d=Frontiera(:,5);

e=Frontiera(:,6);

f=Frontiera(:,7);

g=Frontiera(:,8);

h=Frontiera(:,9);


plot(t1,[a,b,c,d,e,f,g,h]);
legend('persoane frontiera','persoane intrate','persoane iesite','auto frontiera','auto intrate','auto iesite','diferenta','cazuri covid')


% Plot Waze cu date pentru https://covid19.geo-spatial.org/     
%Romania
figure('Name','Waze')
t2=Waze(:,1);
bu=Waze(:,2);

tim=Waze(:,3);

cj=Waze(:,4);

bv=Waze(:,5);

ct=Waze(:,6);

is=Waze(:,7);


plot(t2,[tim,cj,bv,ct,is]);
legend('Bucuresti','Timisoara','Cluj-Napoca','Brasov','Constanta','Iasi')
%% Plot  cu date pentru worldometer    
%Romania
figure('Name','Cazuri')
t3=Cazuri(:,1);
cazuri_totale=Cazuri(:,2);
cazuri_active=Cazuri(:,3);
decese=Cazuri(:,4);
vindecati=Cazuri(:,5);
nr_teste=Cazuri(:,6);
cazuri_unice=Cazuri(:,7);
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


%% Heat map Europa cu date de pe https://covid19.geo-spatial.org/
figure('Name','Europa')

t4=Europa(:,1);
Rusia=Europa(:,2);
UK = Europa(:,3);
Spania=Europa(:,4);
Italia=Europa(:,5);
Turcia=Europa(:,6);
Germaniaa=Europa(:,7);
Frantaa=Europa(:,8);
Suedia=Europa(:,9);
Belarus=Europa(:,10);
Ucraina=Europa(:,11);
Belgia=Europa(:,12);
Olanda=Europa(:,13);
Portugalia=Europa(:,14);
Romania=Europa(:,15);
Polonia=Europa(:,16);
Elvetia=Europa(:,17);
Irlanda=Europa(:,18);
Serbia=Europa(:,19);
Moldova=Europa(:,20);
Austria=Europa(:,21);
Cehia=Europa(:,22);
Danemarca=Europa(:,23);
Bulgaria=Europa(:,24);
Bosnia=Europa(:,25);
Norvegia=Europa(:,26);
Finlanda=Europa(:,27);
Luxemburg=Europa(:,28);
Croatia=Europa(:,29);
Albania=Europa(:,30);
Ungaria=Europa(:,31);
Grecia=Europa(:,32);
Muntenegru=Europa(:,33);
Slovacia=Europa(:,34);
Slovenia=Europa(:,35);
Estonia=Europa(:,36);
Cipru=Europa(:,37);
Andora=Europa(:,38);
Malta=Europa(:,39);
SanMarino=Europa(:,40);
Monaco=Europa(:,41);
Liechtenstein=Europa(:,42);
Lituania=Europa(:,43);
Islanda=Europa(:,44);
Letonia=Europa(:,45);
plot(t4,[Rusia,UK,Spania,	Italia,	Turcia,	Germaniaa,	Frantaa,	Suedia,	Belarus	,Ucraina,	Belgia,	Olanda	,Portugalia,Romania,	Polonia,	Elvetia,	Irlanda	,Serbia	,Moldova	,Austria	,Cehia	,Danemarca	,Bulgaria	,Bosnia ,	Norvegia,	Finlanda	,Luxemburg,	Croatia,	Albania,	Ungaria	,Grecia	,Muntenegru	,Slovacia,	Slovenia,	Estonia,	Lituania,	Islanda	,Letonia,	Cipru,	Andora,	Malta,	SanMarino,	Monaco,	Liechtenstein]);
legend('Rusia','UK','Spania','Italia','Turcia','Germaniaa','Frantaa','Suedia','Belarus','Ucraina','Belgia','Olanda','Portugalia','Romania','Polonia','Elvetia','Irlanda','Serbia','Moldova','Austria','Cehia','Danemarca','Bulgaria	','Bosnia','Norvegia','Finlanda','Luxemburg','Croatia','Albania','Ungaria	','Grecia	','Muntenegru	','Slovacia','Slovenia','Estonia','Lituania','Islanda','Letonia','Cipru','Andora','Malta','SanMarino','Monaco','Liechtenstein')

%% Calitate aer cu date de pe https://covid19.geo-spatial.org/
t5=calitate_aer(:,1);
Co=calitate_aer(:,2);
ica=calitate_aer(:,3);
No2=calitate_aer(:,4);
Pm10=calitate_aer(:,5);
Pm25=calitate_aer(:,6);
So2=calitate_aer(:,7);


figure('Name','Calitate aer')
hold off
hold on
subplot(6,1,1)
plot(t5,Co,'r')
legend('Co')
subplot(6,1,2)
plot(t5,ica,'r')
legend('ica')
subplot(6,1,3)
plot(t5,No2,'m')
legend('No2')
subplot(6,1,4)
plot(t5,Pm10,'b')
legend('Pm10')
subplot(6,1,5)
plot(t5,Pm25,'b')
legend('Pm25')
subplot(6,1,6)
plot(t5,So2,'b')
legend('So2')
hold off

%% Plot Decese cu date de pe https://covid19.geo-spatial.org/
figure('Name','Decese')
t6=Decese(:,1);
bb=Decese(:,2);
ccc=Decese(:,3);
semilogy(t6,[bb,ccc]);



figure('Name','Teste')
t7=teste(:,1);
bbb=Decese(:,2);
plot(t6,bbb);




%%
t8=elvetia2(:,1);
total_cases=elvetia2(:,2);
total_daily=elvetia2(:,3);
deaths=elvetia2(:,3);
daily_deaths=elvetia2(:,4);

figure('Name','Elvetia')
hold off
hold on
subplot(4,1,1)
plot(t8,total_cases,'r')
legend('total cases')
subplot(4,1,2)
plot(t8,total_daily,'r')
legend('Daily cases')
subplot(4,1,3)
plot(t8,deaths,'r')
legend('Deaths')
subplot(4,1,4)
plot(t8,daily_deaths,'r')
legend('Daily Deaths')

hold off



%%
t9=Franta(:,1);
total_cases2=Franta(:,2);
total_daily2=Franta(:,3);
deaths2=Franta(:,3);
daily_deaths_elv=Franta(:,4);


figure('Name','Franta')
hold off
hold on
subplot(4,1,1)
plot(t9,total_cases2,'r')
legend('total cases')
subplot(4,1,2)
plot(t9,total_daily2,'r')
legend('Daily cases')
subplot(4,1,3)
plot(t9,deaths2,'r')
legend('Deaths')
subplot(4,1,4)
plot(t9,daily_deaths_elv,'r')
legend('Daily Deaths')

hold off

%%
t10=Germania(:,1);
total_cases3=Germania(:,2);
total_daily3=Germania(:,3);
deaths3=Germania(:,3);
daily_deaths_germ=Germania(:,4);


figure('Name','Germania')
hold off
hold on
subplot(4,1,1)
plot(t10,total_cases3,'r')
legend('total cases')
subplot(4,1,2)
plot(t10,total_daily3,'r')
legend('Daily cases')
subplot(4,1,3)
plot(t10,deaths3,'r')
legend('Deaths')
subplot(4,1,4)
plot(t10,daily_deaths_germ,'r')
legend('Daily Deaths')

hold off


%%
t10=spania(:,1);
total_cases3=spania(:,2);
total_daily3=spania(:,3);
deaths3=spania(:,3);
daily_deaths_spania=spania(:,4);


figure('Name','Spania')
hold off
hold on
subplot(4,1,1)
plot(t10,total_cases3,'r')
legend('total cases')
subplot(4,1,2)
plot(t10,total_daily3,'r')
legend('Daily cases')
subplot(4,1,3)
plot(t10,deaths3,'r')
legend('Deaths')
subplot(4,1,4)
plot(t10,daily_deaths_spania,'r')
legend('Daily Deaths')

hold off
%%
t10=italia(:,1);
total_cases3=italia(:,2);
total_daily3=italia(:,3);
deaths3=italia(:,3);
daily_deaths_italia=italia(:,4);


figure('Name','Italia')
hold off
hold on
subplot(4,1,1)
plot(t10,total_cases3,'r')
legend('total cases')
subplot(4,1,2)
plot(t10,total_daily3,'r')
legend('Daily cases')
subplot(4,1,3)
plot(t10,deaths3,'r')
legend('Deaths')
subplot(4,1,4)
plot(t10,daily_deaths_italia,'r')
legend('Daily Deaths')

hold off
%%

t10=uk(:,1);
total_cases3=uk(:,2);
total_daily3=uk(:,3);
deaths3=uk(:,3);
daily_deaths_uk=uk(:,4);



figure('Name','UK')
hold off
hold on
subplot(4,1,1)
plot(t10,total_cases3,'r')
legend('total cases')
subplot(4,1,2)
plot(t10,total_daily3,'r')
legend('Daily cases')
subplot(4,1,3)
plot(t10,deaths3,'r')
legend('Deaths')
subplot(4,1,4)
plot(t10,daily_deaths_uk,'r')
legend('Daily Deaths')

hold off



%%
t10=usa(:,1);
total_cases3=usa(:,2);
total_daily3=usa(:,3);
deaths3=usa(:,3);
daily_deaths_usa=usa(:,4);


figure('Name','USA')
hold off
hold on
subplot(4,1,1)
plot(t10,total_cases3,'r')
legend('total cases')
subplot(4,1,2)
plot(t10,total_daily3,'r')
legend('Daily cases')
subplot(4,1,3)
plot(t10,deaths3,'r')
legend('Deaths')
subplot(4,1,4)
plot(t10,daily_deaths_usa,'r')
legend('Daily Deaths')
hold off

%%
t10=portugalia(:,1);
total_cases3=portugalia(:,2);
total_daily3=portugalia(:,3);
deaths3=portugalia(:,5);
daily_deaths_portugalia=portugalia(:,6);


figure('Name','Portugalia')
hold off
hold on
subplot(4,1,1)
plot(t10,total_cases3,'r')
legend('total cases')
subplot(4,1,2)
plot(t10,total_daily3,'r')
legend('Daily cases')
subplot(4,1,3)
plot(t10,deaths3,'r')
legend('Deaths')
subplot(4,1,4)
plot(t10,daily_deaths_portugalia,'r')
legend('Daily Deaths')

hold off


