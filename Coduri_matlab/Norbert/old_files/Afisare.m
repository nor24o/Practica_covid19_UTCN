%% Ploturi Romania date de pe date de pe https://covid19.geo-spatial.org/
figure('Name','Cazuri liniar,logarithmic Romania')
%logatithmic
subplot(2,1,1)
semilogy(t_ro_geo,[cazuri_totale_ro_geo,cazuri_active_ro_geo,decese_ro_geo,vindecati_ro_geo])
title('logatithmic')
legend('cazuri totale','cazuri active','decese','vindecati')

%liniar
subplot(2,1,2)
plot(t_ro_geo,[cazuri_totale_ro_geo,cazuri_active_ro_geo,decese_ro_geo,vindecati_ro_geo])
title('liniar')
legend('cazuri totale','cazuri active','decese','vindecati')


%nr teste,cazuri unice
figure('Name','Nr teste ,cazuri unice')
plot(t_ro_geo,[nr_teste_ro_geo,cazuri_unice_ro_geo])
legend('nr teste','cazuri unice')

%Rata de crestere
figure('Name','Rata de crestere')
plot(t_ro_geo,rata_de_crestere_ro_geo)
title('Rata de crestere')


%nr_de_reproductie_virus
figure('Name','Nr de reproductie virus')
plot(t_ro_geo,[nr_de_reproductie_virus_R,nr_de_reproductie_virus_R25,nr_de_reproductie_virus_R75,nr_de_reproductie_virus_R05,nr_de_reproductie_virus_R95,nr_de_reproductie_virus_R025,nr_de_reproductie_virus_R975])
title('Nr de reproductie virus')




%% Ploturi date de pe worldomeres 
%Israel
figure('Name','Cazuri pentru Israel worldomeres')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Israel_wo,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Israel_wo,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Israel_wo,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Israel_wo,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Israel_wo,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off

%Austria
figure('Name','Cazuri pentru Austria worldomeres')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Austria_wo,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Austria_wo,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Austria_wo,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Austria_wo,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Austria_wo,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off

%Ungaria
figure('Name','Cazuri pentru Ungaria worldomeres')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Ungaria_wo,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Ungaria_wo,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Ungaria_wo,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Ungaria_wo,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Ungaria_wo,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off

%Romania
figure('Name','Cazuri pentru Romania worldomeres')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Romania_wo,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Romania_wo,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Romania_wo,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Romania_wo,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Romania_wo,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off






%% Afisare Cazuri totale Israel Austria Ungaria Romania suprapuse worldomeres
figure;
hold off 
hold on

plot(data_zile,cazuri_totale_Israel_wo,'m')
plot(data_zile,cazuri_totale_Austria_wo,'b')
plot(data_zile,cazuri_totale_Ungaria_wo,'black')
plot(data_zile,cazuri_totale_Romania_wo,'r')
legend('cazuri totale Israel','cazuri totale Austria','cazuri totale Ungaria','cazuri totale Romania')
title('Cazuri totale Israel Austria Ungaria Romania')
xticks(0 :5: 172)

%% diferenta dintre cazuri totlae  https://covid19.geo-spatial.org/ si worldomeres  Romania
%folosim pentru a egala matricele 
B = padarray(t_ro_geo,10,0,'pre');
B_tot = padarray(cazuri_totale_ro_geo,10,0,'pre');

figure
hold on 
plot(data_zile,cazuri_totale_Romania_wo,'r')
plot(data_zile,B_tot,'black')

legend('cazuri totale Romania worldometer','cazuri totale Romania covid19.geo-spatial')
title('diferenta dintre cazuri totale geo-spatial si worldomeres  Romania')
xticks(0 :5: 172)


%% diferenta dintre cazuri totlae  https://covid19.geo-spatial.org/ , cns si worldomeres  Romania suprapuse 

B_tots = padarray(cns_cazuri_sapt,2,NaN,'pos');

figure('Name','diferenta dintre cazuri totlae  https://covid19.geo-spatial.org/ ,cns si worldomeres  Romania')
hold on 

plot(cazuri_noi_pe_sapt_Romania_saptamani_wo,geo_spatial_cazuri_sapt_ro_geo,'r')

plot(cazuri_noi_pe_sapt_Romania_saptamani_wo,B_tots,'black')

plot(cazuri_noi_pe_sapt_Romania_saptamani_wo,cazuri_noi_pe_sapt_Romania_wo,'b')

legend('cazuri totale saptamanale covid19.geo-spatial','cazuri totale saptamanale cns','cazuri totale saptamanale worldomeres')
title('Cazurile totale suprapuse pentru Romania ,sursa date covid19.geo-spatial,cns,worldomeres ')
xticks(0 : 25)
hold off

%%


% scipt matlab pt infromatii comune fata de cele de pe 
% https://www.cnscbt.ro/index.php/analiza-cazuri-confirmate-covid19





% worldmeter
% 
% marti seara
% spania,italia,uk,franta,elvetia,germania,[austria,ungaria,israel],usa,portugalia
