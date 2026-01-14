package SOLID.ocp;

public class PaymentService {
    public void pay(PaymentMethod method, int amount) {
        method.pay(amount);
    }
}
