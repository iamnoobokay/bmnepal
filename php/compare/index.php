<?php
class ArrayClass
{
    public function __construct()
    {
        $a = (int)readline('Enter a number to find values higher: ');
        $choice = (int)readline("Enter 1 for all items greater than entered value, Enter 2 for price of items with greater value: ");
        $ids_and_prices = array(1 => 250, 2 => 350, 3 => 100, 4 => 90, 5 => 230);
        if ($choice == 1) {
            $this->displayArray($a, $ids_and_prices);
        } elseif ($choice == 2) {
            $this->displayPrice($a, $ids_and_prices);
        } else {
            echo ("Invalid Entry");
        }
    }

    private function displayArray($a, $ids_and_prices)
    {
        $displayArray = array();
        foreach ($ids_and_prices as $id => $value) {
            if ($value >= $a) {
                array_push($displayArray, array($id => $value));
            }
        }
        print_r($displayArray);
    }

    private function displayPrice($a, $ids_and_prices)
    {
        $temp = 0;
        foreach ($ids_and_prices as $id => $value) {
            if ($value >= $a) {
                $temp += $value;
            }
        }
        print_r($temp);
    }
}

new ArrayClass();
