%% date de pe https://covid19.geo-spatial.org/

figure('Name','Cazuri liniar,logarithmic')
%logatithmic
subplot(2,1,1)
semilogy(t,[cazuri_totale,cazuri_active,decese,vindecati])
title('logatithmic')
legend('cazuri_totale','cazuri_active','decese','vindecati')

%liniar
subplot(2,1,2)
plot(t,[cazuri_totale,cazuri_active,decese,vindecati])
title('liniar')
legend('cazuri_totale','cazuri_active','decese','vindecati')

%nr teste,cazuri unice
figure('Name','Nr teste ,cazuri unice')
plot(t,[nr_teste,cazuri_unice])

%Rata de crestere
figure('Name','Rata de crestere')
plot(t,rata_de_crestere)


%nr_de_reproductie_virus
figure('Name','nr_de_reproductie_virus')
plot(t,[nr_de_reproductie_virus_R,nr_de_reproductie_virus_R25,nr_de_reproductie_virus_R75,nr_de_reproductie_virus_R05,nr_de_reproductie_virus_R95,nr_de_reproductie_virus_R025,nr_de_reproductie_virus_R975])




%% date de pe worldomeres 
%Israel
figure('Name','Cazuri pentru Israel')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Israel,'*r')
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Israel,'+r')
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Israel,'m')
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Israel,'b')
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Israel,'b')
legend('decese pe zi')
hold off

%Austria
figure('Name','Cazuri pentru Austria')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Austria,'*r')
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Austria,'+r')
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Austria,'m')
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Austria,'b')
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Austria,'b')
legend('decese pe zi')
hold off

%Ungaria
figure('Name','Cazuri pentru Ungaria')
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Ungaria,'r')
legend('cazuri totale')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Ungaria,'r')
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(data_zile,cazuri_active_Ungaria,'m')
legend('cazuri active')
subplot(5,1,4)
plot(data_zile,decese_Ungaria,'b')
legend('decese')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Ungaria,'b')
legend('decese pe zi')
hold off















% worldmeter
% 
% marti seara
% spania,italia,uk,franta,elvetia,germania,[austria,ungaria,israel],usa,portugalia
