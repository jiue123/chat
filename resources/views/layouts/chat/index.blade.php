@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="chat-box">
                <div class="col-sm-7 chat-container chat-container-left">
                    <div class="chat-body">
                        <div class="message col-md-10">
                            <p>Hi!</p>
                            <p>I'm phat</p>
                        </div>
                        <div class="avatar col-md-2" align="right">
                            <img alt="" src="/images/useravatar_1.svg">
                        </div>
                    </div>
                </div>
                <div class="col-sm-7 chat-container chat-container-right">
                    <div class="chat-body">
                        <div class="message col-md-10">
                            <p>Hi!</p>
                            <p>I'm phat</p>
                        </div>
                        <div class="avatar col-md-2" align="right">
                            <img alt="" src="/images/useravatar_2.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
