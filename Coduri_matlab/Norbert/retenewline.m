   % This code creates a single input, single neuron linear layer,
   % with input delays of 0 and 1, and a learning.  It is simulated
   %  for the input sequence P1.
 
       P1=geo_ro_timp';
       T1=geo_ro_cazuri_totale';
       
       %P1 = {0 -1 1 1 0 -1 1 0 0 1};
       %T1 = {0 -1 0 2 1 -1 0 1 0 1};
 
       net = newlin(P1,T1,[0 1],0.01);
       Y = net(P1)
 
   %  Here the network adapts for inputs P1 and targets T1.
 
       [net,Y,E,Pf] = adapt(net,P1,T1); Y
 
    % Here the linear layer continues to adapt for a new sequence
    % using the previous final conditions PF as initial conditions.
 
       P2 = {1 0 -1 -1 1 1 1 0 -1};
       T2 = {2 1 -1 -2 0 2 2 1 0};
       [net,Y,E,Pf] = adapt(net,P2,T2,Pf); 
 
     %Here we initialize the layer's weights and biases to new values.
 
       net = init(net);
 
     %Here we train the newly initialized layer on the entire sequence
     %for 200 epochs to an error goal of 0.1.
 
       P3 = [P1 P2];
       T3 = [T1 T2];
       net.trainParam.epochs = 200;
       net.trainParam.goal = 0.1;
       net = train(net,P3,T3);
       Y = net([P1 P2])