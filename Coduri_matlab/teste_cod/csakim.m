elvetia = xlsread( 'C:\Users\horva\Desktop\Practica\Practica_covid19_UTCN\Database\Csaki\Elvetia.xlsx' ) ;

t=elvetia(:,1);
totla_cases=elvetia(:,2);
totla_daily=elvetia(:,3);
deaths=elvetia(:,3);



figure('Name','elvetia')
hold off
hold on
subplot(3,1,1)
plot(t,totla_cases,'r')
legend('Totla cases')
subplot(3,1,2)
plot(t,totla_daily,'r')
legend('Daily cases')
subplot(3,1,3)
plot(t,deaths,'r')
legend('Deaths')

hold off

%%
Franta = xlsread( 'C:\Users\horva\Desktop\Practica\Practica_covid19_UTCN\Database\Csaki\Franta.xlsx' ) ;

t2=Franta(:,1);
totla_cases2=Franta(:,2);
totla_daily2=Franta(:,3);
deaths2=Franta(:,3);



figure('Name','Franta')
hold off
hold on
subplot(3,1,1)
plot(t2,totla_cases2,'r')
legend('Totla cases')
subplot(3,1,2)
plot(t2,totla_daily2,'r')
legend('Daily cases')
subplot(3,1,3)
plot(t2,deaths2,'r')
legend('Deaths')

hold off

%%
Germania = xlsread( 'C:\Users\horva\Desktop\Practica\Practica_covid19_UTCN\Database\Csaki\Germania.xlsx' ) ;

t3=Germania(:,1);
totla_cases3=Germania(:,2);
totla_daily3=Germania(:,3);
deaths3=Germania(:,3);



figure('Name','Germania')
hold off
hold on
subplot(3,1,1)
plot(t3,totla_cases3,'r')
legend('Totla cases')
subplot(3,1,2)
plot(t3,totla_daily3,'r')
legend('Daily cases')
subplot(3,1,3)
plot(t3,deaths3,'r')
legend('Deaths')

hold off