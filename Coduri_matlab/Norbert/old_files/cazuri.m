%% date de pe https://covid19.geo-spatial.org/
t=Cazuri(:,1);
cazuri_totale=Cazuri(:,2);
cazuri_active=Cazuri(:,3);
decese=Cazuri(:,4);
vindecati=Cazuri(:,5);

nr_teste=Cazuri(:,6);
cazuri_unice=Cazuri(:,7);

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
















% worldmeter
% 
% marti seara
% spania,italia,uk,franta,elvetia,germania,[austria,ungaria,israel],usa,portugalia