package SOLID.ocp;

public class CardPay implements PaymentMethod {
    @Override
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using Card");
    }
}

