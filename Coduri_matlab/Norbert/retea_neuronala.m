%% incarcare date

inputs=geo_ro_timp'
targets=geo_ro_cazuri_active'

net = feedforwardnet(20,'trainlm');
net.divideParam.trainRatio = 70/100;
net.divideParam.valRatio = 15/100;
net.divideParam.testRatio = 15/100;
net.trainParam.goal=0.0001;
net.trainparam.epochs = 5000;     
net.trainParam.max_fail = 500;

 %training
     net2 = train(net,inputs,targets);

 % plot
u=0:1: 300
y=sim(net2,u)' ;
figure;
plot(u,y,'r')
hold on 
plot(wo_timp,targets','b')
title('Cazuri active Romania')
legend('Retea Neuronala feedforward','Semnal initial')
     
	 
%% incarcare date
inputs=wo_timp'
targets=geo_ro_cazuri_active'

net = newff(inputs,targets,17);

 net.trainParam.goal=0.0001;
net.trainparam.epochs = 5000;     
net.trainParam.max_fail = 500;
% training
  net2 = train(net,inputs,targets);
% plot
u=0:1:300
y=sim(net2,u)' ;
figure;
plot(u,y,'r')
hold on 
plot(inputs',targets','b')

title('Cazuri active Romania')
legend('Retea Neuronala newff','Semnal initial')
view(net2)     