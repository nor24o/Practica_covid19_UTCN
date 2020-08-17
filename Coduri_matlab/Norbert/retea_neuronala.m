%% date simulate 

%%incarcare date

%Basuc fitting data cazuri_totale_ro_geo
%Coefficients:
  p1 = 0.00046611;
  p2 = -0.15162;
  p3 = 16.913;
  p4 = -493.66;
  p5 = 2918.5;
  x=0:1:178;
y = p1*x.^4 + p2*x.^3 + p3*x.^2 + p4*x + p5 ;
figure
plot(x,y)
hold on
plot(t_ro_geo,cazuri_totale_ro_geo')

%Norm of residuals = 9256.4


%% cu retele neuronale 
x =  y;
t = cazuri_totale_ro_geo';

net = feedforwardnet(10);
net = train(net,x,t);
view(net)
y = net(x);
perf = perform(net,y,t)


%%
plot(t_ro_geo,net(cazuri_totale_ro_geo'))
hold on
plot(t_ro_geo,cazuri_totale_ro_geo')
legend('neural ','initial ')

