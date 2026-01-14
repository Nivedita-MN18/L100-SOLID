package SOLID.ocp;

public class UpiPay implements PaymentMethod {
    @Override
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using UPI");
    }
}

