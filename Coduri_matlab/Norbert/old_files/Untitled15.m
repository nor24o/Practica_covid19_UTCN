% test newnarxsp
P = {[0] [1] [1] [0] [-1] [-1] [0] [1] [1] [0] [-1]};
T = {[0] [1] [2] [2]  [1]  [0] [1] [2] [1] [0]  [1]};


net = newnarxsp(P,T,[1 2],[1 2],10);



 nrx=sp2narx(net)
 timp=0:1:400;
 %yp3 = sim(nrx,timp);
 
 %plot(timp,yp3,'r')
view(nrx)
