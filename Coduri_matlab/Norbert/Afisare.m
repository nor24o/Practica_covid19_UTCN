%% date de pe https://covid19.geo-spatial.org/

figure('Name,'Cazuri '
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
figure;
plot(t,[nr_teste,cazuri_unice])



%% date de pe worldomeres 
%Israel
figure;
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Israel,'*r')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Israel,'+r')
subplot(5,1,3)
plot(data_zile,cazuri_active_Israel,'m')
subplot(5,1,4)
plot(data_zile,decese_Israel,'b')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Israel,'b')
hold off

%Austria
figure;
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Austria,'*r')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Austria,'+r')
subplot(5,1,3)
plot(data_zile,cazuri_active_Austria,'m')
subplot(5,1,4)
plot(data_zile,decese_Austria,'b')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Austria,'b')
hold off

%Ungaria
figure;
hold off
hold on
subplot(5,1,1)
plot(data_zile,cazuri_totale_Ungaria,'*r')
subplot(5,1,2)
plot(data_zile,cazuri_noi_pe_zi_Ungaria,'+r')
subplot(5,1,3)
plot(data_zile,cazuri_active_Ungaria,'m')
subplot(5,1,4)
plot(data_zile,decese_Ungaria,'b')
subplot(5,1,5)
plot(data_zile,decese_pe_zi_Ungaria,'b')
hold off















% worldmeter
% 
% marti seara
% spania,italia,uk,franta,elvetia,germania,[austria,ungaria,israel],usa,portugalia
