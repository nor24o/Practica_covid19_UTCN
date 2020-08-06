%% date de pe https://covid19.geo-spatial.org/

figure('Name','Cazuri liniar,logarithmic')
%logatithmic
subplot(2,1,1)
semilogy(t,[cazuri_totale,cazuri_active,decese,vindecati])
title('logatithmic')
legend('cazuri totale','cazuri active','decese','vindecati')

%liniar
subplot(2,1,2)
plot(t,[cazuri_totale,cazuri_active,decese,vindecati])
title('liniar')
legend('cazuri totale','cazuri active','decese','vindecati')

%nr teste,cazuri unice
figure('Name','Nr teste ,cazuri unice')
plot(t,[nr_teste,cazuri_unice])
legend('nr teste','cazuri unice')

%Rata de crestere
figure('Name','Rata de crestere')
plot(t,rata_de_crestere)


%nr_de_reproductie_virus
figure('Name','Nr de reproductie virus')
plot(t,[nr_de_reproductie_virus_R,nr_de_reproductie_virus_R25,nr_de_reproductie_virus_R75,nr_de_reproductie_virus_R05,nr_de_reproductie_virus_R95,nr_de_reproductie_virus_R025,nr_de_reproductie_virus_R975])





%% date de pe worldomeres 
%Israel
figure('Name','Cazuri pentru Israel')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Israel,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Israel,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Israel,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Israel,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Israel,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off

%Austria
figure('Name','Cazuri pentru Austria')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Austria,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Austria,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Austria,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Austria,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Austria,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off

%Ungaria
figure('Name','Cazuri pentru Ungaria')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Ungaria,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Ungaria,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Ungaria,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Ungaria,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Ungaria,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off

%Romania
figure('Name','Cazuri pentru Romania')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Romania,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Romania,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Romania,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Romania,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Romania,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off






%% Afisare Cazuri totale Israel Austria Ungaria Romania suprapuse
figure;
hold off 
hold on
title('Cazuri totale Israel Austria Ungaria Romania')
plot(data_zile,cazuri_totale_Israel,'m')
plot(data_zile,cazuri_totale_Austria,'b')
plot(data_zile,cazuri_totale_Ungaria,'black')
plot(data_zile,cazuri_totale_Romania,'r')
legend('cazuri totale Israel','cazuri totale Austria','cazuri totale Ungaria','cazuri totale Romania')

xticks(0 :5: 172)

%% diferenta dintre cazuri totlae  https://covid19.geo-spatial.org/ si worldomeres  Romania
figure
B = padarray(t,10,0,'pre');
B_tot = padarray(cazuri_totale,10,0,'pre');
hold on 

plot(data_zile,cazuri_totale_Romania,'r')

plot(data_zile,B_tot,'black')


legend('cazuri totale Romania worldometer','cazuri totale Romania covid19.geo-spatial')
title('diferenta dintre cazuri totale geo-spatial si worldomeres  Romania')
xticks(0 :5: 172)


%% diferenta dintre cazuri totlae  https://covid19.geo-spatial.org/ ,cns si worldomeres  Romania
figure('Name','diferenta dintre cazuri totlae  https://covid19.geo-spatial.org/ ,cns si worldomeres  Romania')
B_tots = padarray(cns_cazuri_sapt,2,NaN,'pos');

hold on 

plot(cazuri_noi_pe_sapt_Romania_saptamani_wo,geo_spatial_cazuri_sapt,'r')

plot(cazuri_noi_pe_sapt_Romania_saptamani_wo,B_tots,'black')

plot(cazuri_noi_pe_sapt_Romania_saptamani_wo,cazuri_noi_pe_sapt_Romania_wo,'b')

legend('cazuri totale Romania covid19.geo-spatial','cazuri totale Romania cns','geo spatial cazuri sap Romania')
title('Cazuri totale pe saptamana Romania ')
xticks(0 : 25)
hold off

%%


% scipt matlab pt infromatii comune fata de cele de pe 
% https://www.cnscbt.ro/index.php/analiza-cazuri-confirmate-covid19





% worldmeter
% 
% marti seara
% spania,italia,uk,franta,elvetia,germania,[austria,ungaria,israel],usa,portugalia
