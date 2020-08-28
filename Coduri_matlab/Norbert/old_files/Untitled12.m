% This code creates a single input (range of [-1 1] linear layer with one neuron, input delays of 0 and 1, and a learning rate of 0.01. It is simulated for an input sequence P1.
% Exemplu
net = newlin([-1 1],1,[0 1],0.01);

P1 = {0 -1 1 1 0 -1 1 0 0 1};
Y = sim(net,P1)
% Here targets T1 are defined and the layer adapts to them. (Since this is the first call to adapt, the default input delay conditions are used.)

T1 = {0 -1 0 2 1 -1 0 1 0 1};
[net,Y,E,Pf] = adapt(net,P1,T1); Y
% Here the linear layer continues to adapt for a new sequence using the previous final conditions PF as initial conditions.

P2 = {1 0 -1 -1 1 1 1 0 -1};
T2 = {2 1 -1 -2 0 2 2 1 0};
[net,Y,E,Pf] = adapt(net,P2,T2,Pf); Y
% Here we initialize the layer's weights and biases to new values.

net = init(net);
% Here we train the newly initialized layer on the entire sequence for 200 epochs to an error goal of 0.1.

P3 = [P1 P2];
T3 = [T1 T2];
net.trainParam.epochs = 200;
net.trainParam.goal = 0.1;
net = train(net,P3,T3);
Y = sim(net,[P1 P2])
%%
Y=cell2mat(Y)'
u=0:1:20;
plot(u,Y,'r')

%%
view(net)

