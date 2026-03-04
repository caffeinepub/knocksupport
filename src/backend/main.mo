import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";

actor {
  type Submission = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  var nextId = 0;
  let submissions = Map.empty<Nat, Submission>();

  public shared ({ caller }) func submitRequest(name : Text, email : Text, subject : Text, message : Text) : async Nat {
    let id = nextId;
    let submission : Submission = {
      id;
      name;
      email;
      subject;
      message;
      timestamp = Time.now();
    };
    submissions.add(id, submission);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllRequests() : async [Submission] {
    submissions.values().toArray();
  };

  public query ({ caller }) func getRequest(id : Nat) : async Submission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found.") };
      case (?submission) { submission };
    };
  };
};
