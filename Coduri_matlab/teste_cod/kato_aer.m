

calitate_aer = xlsread( 'C:\Users\horva\Desktop\Practica\Practica_covid19_UTCN\Database\Kato\aerlive_data.xlsx' ) ;
%%
t=calitate_aer(:,1);
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
plot(t,Co,'r')
legend('Co')
subplot(6,1,2)
plot(t,ica,'r')
legend('ica')
subplot(6,1,3)
plot(t,No2,'m')
legend('No2')
subplot(6,1,4)
plot(t,Pm10,'b')
legend('Pm10')
subplot(6,1,5)
plot(t,Pm25,'b')
legend('Pm25')
subplot(6,1,6)
plot(t,So2,'b')
legend('So2')
hold off