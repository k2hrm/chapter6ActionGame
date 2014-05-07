#pragma strict

function Start () {
animation.Play("Walk");
yield WaitForSeconds(4.0);
animation.Play("Crouch");
yield WaitForSeconds(4.0);
animation.Play("Idle");
}

function Update () {

}