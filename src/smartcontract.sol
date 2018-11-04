pragma solidity ^0.4.0;
contract Studies {
    int private count = 0;
    bool private validated = false;
    address public studentAdress;

    function passSubject() public {
        count += 1;
        if (count == 3) {
            validated = true;
        }
    }

    function isValidated() public constant returns (bool) {
        return validated;
    }

    function failSubject() public {
        if (count > 0) {
            count -= 1;
        }
    }

    function getCount() public constant returns (int) {
        return count;
    }
}