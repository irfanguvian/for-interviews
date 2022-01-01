<?php
class Node{
 public $value;
 public $next;
 function __construct($value){
  $this->value = $value;
 }
}

class LinkedList{
 public $head = null;

 public function isNull(){
  if (!$this->head){
     return true;
  }else{
     return false;
  }
 }

 function pop(){
   $currentNode = $this->head;
   while($currentNode->next){
    if($currentNode->next->next){
     $currentNode = $currentNode->next; 
    }else{
     break;
    }
   }
   $temp = $currentNode->next;
   $currentNode->next = null;
   return $temp->value;
 }

 function append($value){
  if ($this->isNull()){
   $this->head = new Node($value);
  }else{
   $currentNode = $this->head;
   while($currentNode->next){
    $currentNode = $currentNode->next;
   }
   $currentNode->next = new Node($value);
  }
 }


 function printList(){
  if ($this->isNull()){
   throw new Exception("Your list is null");
  }else{
   $currentNode = $this->head;
   while($currentNode){
    if($currentNode->next){
      echo($currentNode->value.' -> ');
    }else{
     echo($currentNode->value);
    }
    $currentNode = $currentNode->next;
    
   }
  }
 }
}

$list = New LinkedList();
$list->append(2);
$list->append(3);
$list->append(4);
$list->append(5);
$list->append(6);
$list->append(7);
$list->printList() ;
echo("\n");
echo($list->pop()."\n");
$list->printList()
?>