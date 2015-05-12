#!/usr/bin/perl -w

use strict;
use CGI::Carp qw(fatalsToBrowser);
use Time::Local;
use Date::Parse;
use LWP::Simple qw(get);
use CGI::Carp qw(fatalsToBrowser);
use IPC::Run 'run';

use CGI qw(:standard);

print header('application/json');
use CGI;
my $cgi= new CGI;
my $channel= $cgi->param('button');

my $state;

$channel=~ m/(\d+)/g;

#system("mpc -q play " . $1);
run ["mpc", "play $1"], ">", \my $stdout;

run [ "mpc","current" ], ">", \my $stdout;

#my $response=system("mpc current");



my $jsonstring.="{\"station\":\"$stdout\"}";

# print "$jsonstring\n" ;




